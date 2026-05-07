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

## API integration

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

Keep provider keys in server-only environment variables. Do not expose secrets
through `NEXT_PUBLIC_*` variables.
