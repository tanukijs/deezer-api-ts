import got from 'got'
import { QueryInterface } from './interfaces/Query'
import { ResponseInterface } from './interfaces/Response'
import { OptionalParametersInterface } from './interfaces/OptionalParameters'

export async function request<T>(
  segment: string,
  query: string|QueryInterface,
  parameters?: OptionalParametersInterface
): Promise<ResponseInterface<T>> {
  const q = typeof query === 'string' ? query : formatQuery(query)
  const searchParams = { ...parameters, q }
  return got('https://api.deezer.com/search/' + segment, { searchParams }).json()
}

function formatQuery(query: QueryInterface): string {
  return Object.keys(query)
    .map((key: string) => formatPair(key, query[key as keyof QueryInterface]))
    .join(' ')
}

function formatPair(key: string, value: any): string {
  const formattedValue = typeof value == 'string'
    ? `"${value}"`
    : value

  return `${key}:${formattedValue}`
}