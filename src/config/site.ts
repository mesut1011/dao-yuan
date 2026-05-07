export const siteConfig = {
  name: 'AI Director Studio',
  shortName: 'AI Director',
  description: 'A self-owned AI director starter for turning creative briefs into production-ready direction plans.',
  navItems: [
    { href: '/', label: 'Home' },
    { href: '/studio', label: 'Studio' },
    { href: '/about', label: 'About' },
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
