import got from 'got'
import { SearchAlbumResponse } from '../responses/search-album.response'
import { SearchArtistResponse } from '../responses/search-artist.response'
import { SearchTrackResponse } from '../responses/search-track.response'

export function searchAlbums(
  query: Query, 
  parameters?: OptionalParameters
): Promise<Response<SearchAlbumResponse>> {
  return request<SearchAlbumResponse>('album', query, parameters)
}

export function searchArtists(
  query: Query, 
  parameters?: OptionalParameters
): Promise<Response<SearchArtistResponse>> {
  return request<SearchArtistResponse>('artist', query, parameters)
}

export function searchTracks(
  query: Query, 
  parameters?: OptionalParameters
): Promise<Response<SearchTrackResponse>> {
  return request<SearchTrackResponse>('track', query, parameters)
}

enum Order {
  RANKING = 'RANKING',
  TRACK_ASC = 'TRACK_ASC',
  TRACK_DESC = 'TRACK_DESC',
  ARTIST_ASC = 'ARTIST_ASC',
  ARTIST_DESC = 'ARTIST_DESC',
  ALBUM_ASC = 'ALBUM_ASC',
  ALBUM_DESC = 'ALBUM_DESC',
  RATING_ASC = 'RATING_ASC',
  RATING_DESC = 'RATING_DESC',
  DURATION_ASC = 'DURATION_ASC',
  DURATION_DESC = 'DURATION_DESC'
}

interface OptionalParameters {
  strict?: 'on'
  order?: Order
  index?: number
}

interface Query {
  artist?: string
  album?: string
  track?: string
  label?: string
  dur_min?: number
  dur_max?: number
  bpm_min?: number
  bpm_max?: number
}

interface ResponseError {
  type: string
  message: string
}

interface Response<T> {
  data: T[]
  total: number
  prev?: string
  next?: string
  error?: ResponseError
}

async function request<T>(
  segment: string,
  query: string|Query,
  parameters?: OptionalParameters
): Promise<Response<T>> {
  const q = typeof query === 'string' ? query : formatQuery(query)
  const searchParams = { ...parameters, q }
  return got('https://api.deezer.com/search/' + segment, { searchParams }).json()
}

function formatQuery(query: Query): string {
  return Object.keys(query)
    .map((key: string) => formatPair(key, query[key as keyof Query]))
    .join(' ')
}

function formatPair(key: string, value: any): string {
  const formattedValue = typeof value == 'string'
    ? `"${value}"`
    : value

  return `${key}:${formattedValue}`
}