import { request } from '../common'
import { ArtistInterface } from './interfaces/Artist'
import { QueryInterface } from '../common/interfaces/Query'
import { ResponseInterface } from '../common/interfaces/Response'
import { OptionalParametersInterface } from '../common/interfaces/OptionalParameters'

export function getArtists(
  query: QueryInterface, 
  parameters?: OptionalParametersInterface
): Promise<ResponseInterface<ArtistInterface>> {
  return request<ArtistInterface>('track', query, parameters)
}