# AI Director Studio

A neutral Next.js starter for building your own AI director product. It includes
a frontend studio, a backend API route, and a local starter response so the app
can run before you connect your own API.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` and use the Studio page.

## Director API integration

The frontend posts creative briefs to:

```text
POST /api/director
```

By default the route returns a deterministic starter plan from
`src/lib/director.ts`. To connect your own API, set:

```bash
AI_DIRECTOR_API_URL=https://your-api.example.com/director
AI_DIRECTOR_API_KEY=your-server-side-key
```

Then adapt `src/app/api/director/route.ts` and `src/lib/director.ts` to match
your provider response.

## Customer registration backend

Customer registration is available at:

```text
POST /api/customers/register
```

Request body:

```json
{
  "name": "Customer Name",
  "email": "customer@example.com",
  "password": "secure123",
  "company": "Optional Company",
  "marketingOptIn": true,
  "source": "landing-page"
}
```

The route validates input, normalizes email addresses, hashes passwords with
Node.js `scrypt`, blocks duplicate emails in the starter store, and never returns
password data in the response.

Without external configuration, registrations are stored in an in-memory starter
store. That is useful for local development, but not durable enough for
production. To connect your own customer or auth service, set:

```bash
CUSTOMER_REGISTRATION_API_URL=https://your-api.example.com/customers/register
CUSTOMER_REGISTRATION_API_KEY=your-server-side-key
```

When `CUSTOMER_REGISTRATION_API_URL` is present, the backend route validates the
request and then forwards it server-side to your API. A `409` response from your
API is returned as a duplicate-customer error.

Keep provider keys in server-only environment variables. Do not expose secrets
through `NEXT_PUBLIC_*` variables.
