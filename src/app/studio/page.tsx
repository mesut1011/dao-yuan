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

const sourceLabels: Record<string, string> = {
  'external-api': '外部 API',
  starter: '本地示例',
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
        throw new Error(payload.errors?.join(' ') || '暂时无法生成导演方案。')
      }

      setPlan(payload.plan || null)
      setSource(payload.source || '')
    } catch (requestError) {
      setPlan(null)
      setSource('')
      setError(requestError instanceof Error ? requestError.message : '请求过程中发生未知错误。')
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
          <p className="eyebrow">工作台</p>
          <h1>生成导演方案</h1>
          <p>
            填写创意简报后提交到后端路由。未配置外部 API 时，系统会返回本地示例方案，
            方便你先完整预览前后端流程。
          </p>

          <form className="brief-form" onSubmit={handleSubmit}>
            <label>
              项目名称
              <input
                name="projectName"
                value={brief.projectName}
                onChange={(event) => updateField('projectName', event.target.value)}
                placeholder="发布视频、产品演示、短片..."
                required
              />
            </label>

            <label>
              创意目标
              <textarea
                name="goal"
                value={brief.goal}
                onChange={(event) => updateField('goal', event.target.value)}
                placeholder="说明这支内容需要达成什么目标。"
                required
              />
            </label>

            <div className="form-row">
              <label>
                目标受众
                <input
                  name="audience"
                  value={brief.audience}
                  onChange={(event) => updateField('audience', event.target.value)}
                  placeholder="创业者、创作者、企业客户..."
                  required
                />
              </label>
              <label>
                目标时长
                <input
                  name="duration"
                  value={brief.duration}
                  onChange={(event) => updateField('duration', event.target.value)}
                  placeholder="30 秒、2 分钟..."
                  required
                />
              </label>
            </div>

            <label>
              视觉风格
              <input
                name="style"
                value={brief.style}
                onChange={(event) => updateField('style', event.target.value)}
                placeholder="电影感、极简、纪录片、快节奏..."
                required
              />
            </label>

            <label>
              限制条件
              <textarea
                name="constraints"
                value={brief.constraints}
                onChange={(event) => updateField('constraints', event.target.value)}
                placeholder="预算、场地、必拍镜头、品牌规范..."
              />
            </label>

            <button className="button primary" type="submit" disabled={isLoading}>
              {isLoading ? '生成中...' : '生成方案'}
            </button>
          </form>
        </section>

        <section className="panel result-panel">
          <div className="result-header">
            <div>
              <p className="eyebrow">生成结果</p>
              <h2>{plan ? plan.title : '等待提交简报'}</h2>
            </div>
            {source ? <span className="source-pill">{sourceLabels[source] || source}</span> : null}
          </div>

          {error ? <p className="error-box">{error}</p> : null}

          {plan ? (
            <div className="content-stack">
              <p className="lead">{plan.logline}</p>

              <div>
                <h3>创意方向</h3>
                <ul className="check-list">
                  {plan.creativeDirection.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3>分镜头清单</h3>
                <div className="shot-list">
                  {plan.shotList.map((shot) => (
                    <article key={shot.scene}>
                      <h4>{shot.scene}</h4>
                      <p><strong>目的：</strong>{shot.purpose}</p>
                      <p><strong>导演说明：</strong>{shot.direction}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h3>制作注意事项</h3>
                <ul>
                  {plan.productionNotes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3>后续步骤</h3>
                <ul>
                  {plan.nextSteps.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="empty-state">
              <p>提交表单后，生成的导演方案会显示在这里。</p>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
