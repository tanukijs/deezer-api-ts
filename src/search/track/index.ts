import { request } from '../common'
import { TrackInterface } from './interfaces/Track'
import { QueryInterface } from '../common/interfaces/Query'
import { ResponseInterface } from '../common/interfaces/Response'
import { OptionalParametersInterface } from '../common/interfaces/OptionalParameters'

export function getTracks(
  query: QueryInterface, 
  parameters?: OptionalParametersInterface
): Promise<ResponseInterface<TrackInterface>> {
  return request<TrackInterface>('track', query, parameters)
}