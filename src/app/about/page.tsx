import { siteConfig } from '@/config/site'

export default function AboutPage() {
  return (
    <main className="section">
      <div className="container narrow">
        <div className="section-heading">
          <p className="eyebrow">About this starter</p>
          <h1>{siteConfig.name}</h1>
          <p>
            This project is now a neutral foundation for your own AI director
            application. Provider-specific, third-party, and previous product
            content has been removed from the user experience.
          </p>
        </div>

        <div className="content-stack">
          <section className="panel">
            <h2>What changed</h2>
            <ul className="check-list">
              <li>Removed previous brand, service, and contact copy from the UI.</li>
              <li>Replaced hard-coded contact links with a server-side API route.</li>
              <li>Added a starter director workflow that works without external providers.</li>
            </ul>
          </section>

          <section className="panel">
            <h2>API integration point</h2>
            <p>
              The frontend posts creative briefs to <code>{siteConfig.api.directorEndpoint}</code>.
              That route can call your own provider by setting <code>{siteConfig.api.externalApiUrlEnv}</code>
              and, if needed, <code>{siteConfig.api.externalApiKeyEnv}</code>.
            </p>
            <p>
              Keep provider credentials in server-only environment variables. Public
              client variables should only be used for non-secret settings.
            </p>
          </section>

          <section className="panel warning">
            <h2>Production note</h2>
            <p>
              The current response is a deterministic starter plan. Replace or enrich it
              with your own API, persistence, authentication, billing, and review workflow
              before launching a customer-facing product.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
