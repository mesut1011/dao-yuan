import { siteConfig } from '@/config/site'

export default function AboutPage() {
  return (
    <main className="section">
      <div className="container narrow">
        <div className="section-heading">
          <p className="eyebrow">关于这个模板</p>
          <h1>{siteConfig.name}</h1>
          <p>
            这个项目已经整理为一个中性的 AI 导演应用基础。界面中与旧产品、
            第三方联系方式和特定服务相关的内容都已移除，方便你接入自己的业务。
          </p>
        </div>

        <div className="content-stack">
          <section className="panel">
            <h2>已完成的改造</h2>
            <ul className="check-list">
              <li>移除了旧品牌、旧服务和固定联系方式文案。</li>
              <li>使用服务端 API 路由替代硬编码的外部联系方式。</li>
              <li>新增无需外部供应商即可运行的导演工作流示例。</li>
              <li>新增客户注册后端接口，后续可替换为你自己的客户系统。</li>
            </ul>
          </section>

          <section className="panel">
            <h2>API 接入点</h2>
            <p>
              前端会把创意简报提交到 <code>{siteConfig.api.directorEndpoint}</code>。
              通过设置 <code>{siteConfig.api.externalApiUrlEnv}</code>，并按需设置{' '}
              <code>{siteConfig.api.externalApiKeyEnv}</code>，该路由即可调用你的生成服务。
            </p>
            <p>
              客户注册接口位于 <code>{siteConfig.api.customerRegistrationEndpoint}</code>。
              你可以通过 <code>{siteConfig.api.customerRegistrationApiUrlEnv}</code> 和{' '}
              <code>{siteConfig.api.customerRegistrationApiKeyEnv}</code> 接入自己的客户服务。
            </p>
            <p>
              供应商密钥和客户系统密钥应只放在服务端环境变量中。公开的客户端变量只用于非敏感配置。
            </p>
          </section>

          <section className="panel warning">
            <h2>上线前说明</h2>
            <p>
              当前默认返回的是本地示例方案。正式上线前，请替换或扩展为你的生成 API、
              数据持久化、身份认证、计费和人工审核流程。
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
