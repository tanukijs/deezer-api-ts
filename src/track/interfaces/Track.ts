import { ExplicitContentEnum } from '../enums/ExplicitContent'
import { AlbumInterface } from './Album'
import { ArtistInterface } from './Artist'
import { ContributorInterface } from './Contributor'

export interface TrackInterface {
  id: string
  readable: boolean
  title: string
  title_short: string
  title_version: string
  isrc: string
  link: string
  share: string
  duration: string
  track_position: number
  disk_number: number
  rank: string
  release_date: string
  explicit_lyrics: boolean
  explicit_content_lyrics: ExplicitContentEnum
  explicit_content_cover: ExplicitContentEnum
  preview: string
  bpm: number
  gain: number
  available_countries: string[]
  contributors: ContributorInterface[]
  md5_image: string
  artist: ArtistInterface
  album: AlbumInterface
  type: string
}