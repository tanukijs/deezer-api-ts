import { ExplicitContentEnum } from '../enums/ExplicitContent'
import { GenreInterface } from './Genre'
import { TrackInterface } from './Track'
import { ArtistInterface } from './Artist'
import { ContributorInterface } from './Contributor'

export interface AlbumInterface {
  id: string
  title: string
  upc: string
  link: string
  share: string
  cover: string
  cover_small: string
  cover_medium: string
  cover_big: string
  cover_xl: string
  md5_image: string
  genre_id: number
  genres: {
    [data: string]: GenreInterface[]
  }
  label: string
  nb_tracks: number
  duration: number
  fans: number
  rating: number
  release_date: string
  record_type: string
  available: boolean
  tracklist: string
  explicit_lyrics: boolean
  explicit_content_lyrics: ExplicitContentEnum
  explicit_content_cover: ExplicitContentEnum
  contributors: ContributorInterface[]
  artist: ArtistInterface
  type: string
  tracks: {
    [data: string]: TrackInterface[]
  }
}
