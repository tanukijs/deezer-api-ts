export interface ResponseInterface<T> {
  data: T[]
  total: number
  prev?: string
  next?: string
}