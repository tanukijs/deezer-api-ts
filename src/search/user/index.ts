import { request } from '../common'
import { UserInterface } from './interfaces/User'
import { QueryInterface } from '../common/interfaces/Query'
import { ResponseInterface } from '../common/interfaces/Response'
import { OptionalParametersInterface } from '../common/interfaces/OptionalParameters'

export function searchUsers(
  query: QueryInterface, 
  parameters?: OptionalParametersInterface
): Promise<ResponseInterface<UserInterface>> {
  return request<UserInterface>('podcast', query, parameters)
}