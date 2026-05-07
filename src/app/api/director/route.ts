import { NextRequest, NextResponse } from 'next/server'
import {
  createStarterDirectorPlan,
  normalizeDirectorBrief,
  validateDirectorBrief,
  type DirectorBriefInput,
  type DirectorPlan,
} from '@/lib/director'

interface ExternalDirectorResponse {
  plan?: DirectorPlan
  data?: DirectorPlan
}

async function callExternalDirectorApi(input: DirectorBriefInput): Promise<DirectorPlan | null> {
  const url = process.env.AI_DIRECTOR_API_URL

  if (!url) {
    return null
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...(process.env.AI_DIRECTOR_API_KEY
        ? { authorization: `Bearer ${process.env.AI_DIRECTOR_API_KEY}` }
        : {}),
    },
    body: JSON.stringify(input),
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`外部导演 API 返回 ${response.status}。`)
  }

  const payload = (await response.json()) as ExternalDirectorResponse | DirectorPlan | null

  if (!payload || typeof payload !== 'object') {
    return null
  }

  return 'title' in payload ? payload : payload.plan || payload.data || null
}

export async function POST(request: NextRequest) {
  try {
    let body: unknown

    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ errors: ['请求体必须是有效的 JSON。'] }, { status: 400 })
    }

    const input = normalizeDirectorBrief(body as Partial<DirectorBriefInput>)
    const errors = validateDirectorBrief(input)

    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 })
    }

    const externalPlan = await callExternalDirectorApi(input)
    const plan = externalPlan || createStarterDirectorPlan(input)

    return NextResponse.json({
      source: externalPlan ? 'external-api' : 'starter',
      plan,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : '暂时无法生成导演方案。'

    return NextResponse.json({ errors: [message] }, { status: 500 })
  }
}
