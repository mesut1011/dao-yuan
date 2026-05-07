import { randomBytes, randomUUID, scrypt as scryptCallback } from 'crypto'
import { promisify } from 'util'

const scrypt = promisify(scryptCallback)
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export interface CustomerRegistrationInput {
  name: string
  email: string
  password: string
  company?: string
  marketingOptIn?: boolean
  source?: string
}

export interface PublicCustomer {
  id: string
  name: string
  email: string
  company?: string
  marketingOptIn: boolean
  source: string
  createdAt: string
}

interface StoredCustomer extends PublicCustomer {
  passwordHash: string
  passwordSalt: string
  passwordVersion: 'scrypt-v1'
}

interface GlobalCustomerStore {
  customersByEmail: Map<string, StoredCustomer>
}

declare global {
  // eslint-disable-next-line no-var
  var __aiDirectorCustomerStore: GlobalCustomerStore | undefined
}

export class DuplicateCustomerError extends Error {
  constructor(email: string) {
    super(`A customer already exists for ${email}.`)
    this.name = 'DuplicateCustomerError'
  }
}

export function normalizeCustomerRegistration(input: Partial<CustomerRegistrationInput>): CustomerRegistrationInput {
  return {
    name: String(input.name || '').trim(),
    email: String(input.email || '').trim().toLowerCase(),
    password: String(input.password || ''),
    company: String(input.company || '').trim(),
    marketingOptIn: Boolean(input.marketingOptIn),
    source: String(input.source || 'api').trim() || 'api',
  }
}

export function validateCustomerRegistration(input: CustomerRegistrationInput): string[] {
  const errors: string[] = []

  if (input.name.length < 2) errors.push('Name must be at least 2 characters.')
  if (input.name.length > 80) errors.push('Name must be 80 characters or less.')
  if (!EMAIL_PATTERN.test(input.email)) errors.push('A valid email address is required.')
  if (input.email.length > 254) errors.push('Email must be 254 characters or less.')
  if (input.password.length < 8) errors.push('Password must be at least 8 characters.')
  if (input.password.length > 128) errors.push('Password must be 128 characters or less.')
  if (!/[A-Za-z]/.test(input.password) || !/[0-9]/.test(input.password)) {
    errors.push('Password must include at least one letter and one number.')
  }
  if (input.company && input.company.length > 120) {
    errors.push('Company must be 120 characters or less.')
  }
  if ((input.source || '').length > 80) errors.push('Source must be 80 characters or less.')

  return errors
}

export async function createPasswordRecord(password: string) {
  const salt = randomBytes(16).toString('base64url')
  const hash = (await scrypt(password, salt, 64)) as Buffer

  return {
    passwordHash: hash.toString('base64url'),
    passwordSalt: salt,
    passwordVersion: 'scrypt-v1' as const,
  }
}

export function toPublicCustomer(customer: StoredCustomer): PublicCustomer {
  return {
    id: customer.id,
    name: customer.name,
    email: customer.email,
    company: customer.company,
    marketingOptIn: customer.marketingOptIn,
    source: customer.source,
    createdAt: customer.createdAt,
  }
}

function getStarterStore(): GlobalCustomerStore {
  if (!globalThis.__aiDirectorCustomerStore) {
    globalThis.__aiDirectorCustomerStore = {
      customersByEmail: new Map<string, StoredCustomer>(),
    }
  }

  return globalThis.__aiDirectorCustomerStore
}

export async function registerStarterCustomer(input: CustomerRegistrationInput): Promise<PublicCustomer> {
  const store = getStarterStore()

  if (store.customersByEmail.has(input.email)) {
    throw new DuplicateCustomerError(input.email)
  }

  const passwordRecord = await createPasswordRecord(input.password)
  const customer: StoredCustomer = {
    id: randomUUID(),
    name: input.name,
    email: input.email,
    company: input.company || undefined,
    marketingOptIn: input.marketingOptIn || false,
    source: input.source || 'api',
    createdAt: new Date().toISOString(),
    ...passwordRecord,
  }

  store.customersByEmail.set(customer.email, customer)

  return toPublicCustomer(customer)
}

export function mapExternalCustomerResponse(payload: unknown, fallback: CustomerRegistrationInput): PublicCustomer {
  const response = payload && typeof payload === 'object' ? payload as Record<string, unknown> : {}
  const nested = response.customer && typeof response.customer === 'object'
    ? response.customer as Record<string, unknown>
    : response.data && typeof response.data === 'object'
      ? response.data as Record<string, unknown>
      : response

  return {
    id: typeof nested.id === 'string' && nested.id ? nested.id : randomUUID(),
    name: typeof nested.name === 'string' && nested.name ? nested.name : fallback.name,
    email: typeof nested.email === 'string' && nested.email ? nested.email.toLowerCase() : fallback.email,
    company: typeof nested.company === 'string' && nested.company ? nested.company : fallback.company || undefined,
    marketingOptIn: typeof nested.marketingOptIn === 'boolean' ? nested.marketingOptIn : fallback.marketingOptIn || false,
    source: typeof nested.source === 'string' && nested.source ? nested.source : fallback.source || 'external-api',
    createdAt: typeof nested.createdAt === 'string' && nested.createdAt ? nested.createdAt : new Date().toISOString(),
  }
}
