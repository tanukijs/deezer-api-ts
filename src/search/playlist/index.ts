import { request } from '../common'
import { PlaylistInterface } from './interfaces/Playlist'
import { QueryInterface } from '../common/interfaces/Query'
import { ResponseInterface } from '../common/interfaces/Response'
import { OptionalParametersInterface } from '../common/interfaces/OptionalParameters'

export function searchPlaylists(
  query: QueryInterface, 
  parameters?: OptionalParametersInterface
): Promise<ResponseInterface<PlaylistInterface>> {
  return request<PlaylistInterface>('playlist', query, parameters)
}