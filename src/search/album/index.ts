import { request } from '../common'
import { AlbumInterface } from './interfaces/Album'
import { QueryInterface } from '../common/interfaces/Query'
import { ResponseInterface } from '../common/interfaces/Response'
import { OptionalParametersInterface } from '../common/interfaces/OptionalParameters'

export function getAlbums(
  query: QueryInterface, 
  parameters?: OptionalParametersInterface
): Promise<ResponseInterface<AlbumInterface>> {
  return request<AlbumInterface>('track', query, parameters)
}