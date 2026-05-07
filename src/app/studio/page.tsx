'use client'

import { FormEvent, useState } from 'react'
import { siteConfig } from '@/config/site'
import type { DirectorBriefInput, DirectorPlan } from '@/lib/director'

interface DirectorApiResponse {
  source?: string
  plan?: DirectorPlan
  errors?: string[]
}

const initialBrief: DirectorBriefInput = {
  projectName: '',
  goal: '',
  audience: '',
  style: '',
  duration: '',
  constraints: '',
}

export default function StudioPage() {
  const [brief, setBrief] = useState<DirectorBriefInput>(initialBrief)
  const [plan, setPlan] = useState<DirectorPlan | null>(null)
  const [source, setSource] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch(siteConfig.api.directorEndpoint, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(brief),
      })
      const payload = (await response.json()) as DirectorApiResponse

      if (!response.ok) {
        throw new Error(payload.errors?.join(' ') || 'Unable to create a director plan.')
      }

      setPlan(payload.plan || null)
      setSource(payload.source || '')
    } catch (requestError) {
      setPlan(null)
      setSource('')
      setError(requestError instanceof Error ? requestError.message : 'Unexpected request error.')
    } finally {
      setIsLoading(false)
    }
  }

  function updateField(field: keyof DirectorBriefInput, value: string) {
    setBrief((current) => ({ ...current, [field]: value }))
  }

  return (
    <main className="section">
      <div className="container studio-grid">
        <section className="panel">
          <p className="eyebrow">Studio</p>
          <h1>Create a director plan</h1>
          <p>
            Submit a creative brief to the backend route. Without your external API
            configured, the app returns a deterministic starter plan so the frontend
            remains fully testable.
          </p>

          <form className="brief-form" onSubmit={handleSubmit}>
            <label>
              Project name
              <input
                name="projectName"
                value={brief.projectName}
                onChange={(event) => updateField('projectName', event.target.value)}
                placeholder="Launch video, product demo, short film..."
                required
              />
            </label>

            <label>
              Creative goal
              <textarea
                name="goal"
                value={brief.goal}
                onChange={(event) => updateField('goal', event.target.value)}
                placeholder="Explain what this piece should achieve."
                required
              />
            </label>

            <div className="form-row">
              <label>
                Target audience
                <input
                  name="audience"
                  value={brief.audience}
                  onChange={(event) => updateField('audience', event.target.value)}
                  placeholder="Founders, creators, enterprise buyers..."
                  required
                />
              </label>
              <label>
                Target duration
                <input
                  name="duration"
                  value={brief.duration}
                  onChange={(event) => updateField('duration', event.target.value)}
                  placeholder="30 seconds, 2 minutes..."
                  required
                />
              </label>
            </div>

            <label>
              Visual style
              <input
                name="style"
                value={brief.style}
                onChange={(event) => updateField('style', event.target.value)}
                placeholder="Cinematic, minimal, documentary, energetic..."
                required
              />
            </label>

            <label>
              Constraints
              <textarea
                name="constraints"
                value={brief.constraints}
                onChange={(event) => updateField('constraints', event.target.value)}
                placeholder="Budget, locations, required scenes, brand rules..."
              />
            </label>

            <button className="button primary" type="submit" disabled={isLoading}>
              {isLoading ? 'Generating...' : 'Generate plan'}
            </button>
          </form>
        </section>

        <section className="panel result-panel">
          <div className="result-header">
            <div>
              <p className="eyebrow">Result</p>
              <h2>{plan ? plan.title : 'Waiting for a brief'}</h2>
            </div>
            {source ? <span className="source-pill">{source}</span> : null}
          </div>

          {error ? <p className="error-box">{error}</p> : null}

          {plan ? (
            <div className="content-stack">
              <p className="lead">{plan.logline}</p>

              <div>
                <h3>Creative direction</h3>
                <ul className="check-list">
                  {plan.creativeDirection.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3>Shot list</h3>
                <div className="shot-list">
                  {plan.shotList.map((shot) => (
                    <article key={shot.scene}>
                      <h4>{shot.scene}</h4>
                      <p><strong>Purpose:</strong> {shot.purpose}</p>
                      <p><strong>Direction:</strong> {shot.direction}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h3>Production notes</h3>
                <ul>
                  {plan.productionNotes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3>Next steps</h3>
                <ul>
                  {plan.nextSteps.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="empty-state">
              <p>Your generated plan will appear here after you submit the form.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
