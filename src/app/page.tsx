import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">自有 AI 工作流起步模板</p>
            <h1>打造属于你的 AI 导演产品。</h1>
            <p className="hero-copy">
              {siteConfig.name} 提供干净的前端界面、服务端 API 边界和中性的创意工作流。
              你可以在此基础上接入自己的模型、自动化服务或生产后端。
            </p>
            <div className="button-row">
              <Link href="/studio" className="button primary">
                打开工作台
              </Link>
              <Link href="/about" className="button secondary">
                查看接入说明
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <p className="card-label">输出预览</p>
            <h2>导演方案</h2>
            <ul>
              <li>创意方向</li>
              <li>分镜头清单</li>
              <li>制作注意事项</li>
              <li>后续 API 接入步骤</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">已包含内容</p>
            <h2>一个随时可接入你自有 API 的产品外壳。</h2>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <h3>前端工作台</h3>
              <p>
                客户端创意简报表单会提交到 Next.js API 路由，并渲染结构化的导演方案。
              </p>
            </article>
            <article className="feature-card">
              <h3>后端接入边界</h3>
              <p>
                <code>/api/director</code> 路由把 API 密钥和供应商逻辑保留在服务端。
                在接入你的 API 之前，会先返回本地示例结果。
              </p>
            </article>
            <article className="feature-card">
              <h3>中性品牌基础</h3>
              <p>
                旧项目的特定品牌和业务内容已移除，方便你替换成自己的品牌和流程。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container split-card">
          <div>
            <p className="eyebrow">下一步</p>
            <h2>接入你自己的生成 API。</h2>
            <p>
              设置 <code>{siteConfig.api.externalApiUrlEnv}</code>，并按需设置{' '}
              <code>{siteConfig.api.externalApiKeyEnv}</code>，然后把你的 API 响应映射到统一的
              DirectorPlan 数据结构。
            </p>
          </div>
          <Link href="/studio" className="button primary">
            体验工作流
          </Link>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>{siteConfig.name}</p>
          <span>为你的自有 API 和自有品牌而构建。</span>
        </div>
      </footer>
    </main>
  )
}
