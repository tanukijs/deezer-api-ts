import  { OrderEnum } from '../enums/Order'

export interface OptionalParametersInterface {
  strict?: 'on'
  order?: OrderEnum
  index?: number
}