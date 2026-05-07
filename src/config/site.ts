export const siteConfig = {
  name: 'AI 导演工作室',
  shortName: 'AI 导演',
  description: '一个可接入自有 API 的 AI 导演产品起步模板，用于把创意简报转化为可执行的制作方案。',
  navItems: [
    { href: '/', label: '首页' },
    { href: '/studio', label: '工作台' },
    { href: '/about', label: '关于' },
  ],
  api: {
    directorEndpoint: '/api/director',
    customerRegistrationEndpoint: '/api/customers/register',
    externalApiUrlEnv: 'AI_DIRECTOR_API_URL',
    externalApiKeyEnv: 'AI_DIRECTOR_API_KEY',
    customerRegistrationApiUrlEnv: 'CUSTOMER_REGISTRATION_API_URL',
    customerRegistrationApiKeyEnv: 'CUSTOMER_REGISTRATION_API_KEY',
  },
}
