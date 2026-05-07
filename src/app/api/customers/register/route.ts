import { NextRequest, NextResponse } from 'next/server'
import {
  DuplicateCustomerError,
  mapExternalCustomerResponse,
  normalizeCustomerRegistration,
  registerStarterCustomer,
  validateCustomerRegistration,
  type CustomerRegistrationInput,
  type PublicCustomer,
} from '@/lib/customers'

export const runtime = 'nodejs'

interface RegistrationResult {
  source: 'external-api' | 'starter'
  customer: PublicCustomer
}

async function callExternalRegistrationApi(input: CustomerRegistrationInput): Promise<RegistrationResult | null> {
  const url = process.env.CUSTOMER_REGISTRATION_API_URL

  if (!url) {
    return null
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...(process.env.CUSTOMER_REGISTRATION_API_KEY
        ? { authorization: `Bearer ${process.env.CUSTOMER_REGISTRATION_API_KEY}` }
        : {}),
    },
    body: JSON.stringify(input),
    cache: 'no-store',
  })

  if (response.status === 409) {
    throw new DuplicateCustomerError(input.email)
  }

  if (!response.ok) {
    throw new Error(`外部客户注册 API 返回 ${response.status}。`)
  }

  const payload = await response.json().catch(() => null)

  return {
    source: 'external-api',
    customer: mapExternalCustomerResponse(payload, input),
  }
}

export async function POST(request: NextRequest) {
  try {
    let body: unknown

    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ errors: ['请求体必须是有效的 JSON。'] }, { status: 400 })
    }

    const input = normalizeCustomerRegistration(body as Partial<CustomerRegistrationInput>)
    const errors = validateCustomerRegistration(input)

    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 })
    }

    const externalResult = await callExternalRegistrationApi(input)
    const result = externalResult || {
      source: 'starter' as const,
      customer: await registerStarterCustomer(input),
    }

    return NextResponse.json(result, { status: 201 })
  } catch (error) {
    if (error instanceof DuplicateCustomerError) {
      return NextResponse.json({ errors: [error.message] }, { status: 409 })
    }

    const message = error instanceof Error ? error.message : '暂时无法注册客户。'

    return NextResponse.json({ errors: [message] }, { status: 500 })
  }
}
