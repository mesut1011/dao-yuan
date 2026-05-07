import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Self-owned AI workflow starter</p>
            <h1>Build your own AI director product.</h1>
            <p className="hero-copy">
              {siteConfig.name} gives you a clean frontend, a server-side API boundary,
              and a neutral creative workflow that you can connect to your own model,
              automation, or production backend.
            </p>
            <div className="button-row">
              <Link href="/studio" className="button primary">
                Open Studio
              </Link>
              <Link href="/about" className="button secondary">
                View integration notes
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <p className="card-label">Output preview</p>
            <h2>Director Plan</h2>
            <ul>
              <li>Creative direction</li>
              <li>Scene-by-scene shot list</li>
              <li>Production notes</li>
              <li>Next API integration steps</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What is included</p>
            <h2>A product shell ready for your API.</h2>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Frontend studio</h3>
              <p>
                A client-side brief form that submits to your Next.js API route and renders
                a structured director plan.
              </p>
            </article>
            <article className="feature-card">
              <h3>Backend boundary</h3>
              <p>
                The <code>/api/director</code> route keeps API keys and provider logic on the
                server, with a local starter response until your API is connected.
              </p>
            </article>
            <article className="feature-card">
              <h3>Neutral branding</h3>
              <p>
                Previous product-specific content has been removed so the app can become
                your own brand and workflow.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container split-card">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Connect your own generation API.</h2>
            <p>
              Set <code>{siteConfig.api.externalApiUrlEnv}</code> and optionally{' '}
              <code>{siteConfig.api.externalApiKeyEnv}</code>, then map your API response to
              the shared DirectorPlan shape.
            </p>
          </div>
          <Link href="/studio" className="button primary">
            Try the workflow
          </Link>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>{siteConfig.name}</p>
          <span>Built for your own API and brand.</span>
        </div>
      </footer>
    </main>
  )
}
