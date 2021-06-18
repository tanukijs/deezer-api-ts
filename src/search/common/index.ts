import got from 'got'
import { QueryInterface } from './interfaces/Query'
import { ResponseInterface } from './interfaces/Response'
import { OptionalParametersInterface } from './interfaces/OptionalParameters'

export async function request<T>(
  segment: string,
  query: QueryInterface,
  parameters?: OptionalParametersInterface
): Promise<ResponseInterface<T>> {
  const queryKeys = Object.keys(query)
  const q = queryKeys
    .map((key: string) => {
      const value: any = query[key as keyof QueryInterface]
      const formattedValue = typeof value == 'string'
        ? `"${value}"`
        : value

        return `${key}:${formattedValue}`
    })
    .join(' ')

  const searchParams = { ...parameters, q }
  return got('https://api.deezer.com/search/' + segment, { searchParams }).json()
}