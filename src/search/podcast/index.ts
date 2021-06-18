import { request } from '../common'
import { PodcastInterface } from './interfaces/Podcast'
import { QueryInterface } from '../common/interfaces/Query'
import { ResponseInterface } from '../common/interfaces/Response'
import { OptionalParametersInterface } from '../common/interfaces/OptionalParameters'

export function searchPodcasts(
  query: QueryInterface, 
  parameters?: OptionalParametersInterface
): Promise<ResponseInterface<PodcastInterface>> {
  return request<PodcastInterface>('podcast', query, parameters)
}