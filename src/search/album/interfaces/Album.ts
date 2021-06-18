import { ArtistInterface } from './Artist'

export interface AlbumInterface {
  id: string
  title: string
  link: string
  cover: string
  cover_small: string
  cover_medium: string
  cover_big: string
  cover_xl: string
  md5_image: string
  genre_id: number
  nb_tracks: number
  record_type: string
  tracklist: string
  explicit_lyrics: boolean
  artist: ArtistInterface
  type: string
}