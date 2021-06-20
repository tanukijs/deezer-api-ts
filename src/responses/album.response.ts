interface AlbumContributor {
  id: number
  name: string
  link: string
  share: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  radio: boolean
  tracklist: string
  type: string
  role: string
}

interface AlbumArtist {
  id: string
  name: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  tracklist: string
  type: string
}

interface TrackArtist {
  id: string
  name: string
  tracklist: string
  type: string
}

interface AlbumTrack {
  id: string
  readable: boolean
  title: string
  title_short: string
  title_version: string
  link: string
  duration: string
  rank: string
  explicit_lyrics: boolean
  explicit_content_lyrics: number
  explicit_content_cover: number
  preview: string
  md5_image: string
  artist: TrackArtist
  type: string
}

interface AlbumGenre {
  id: number
  name: string
  picture: string
  type: string
}

export interface AlbumResponse {
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
  genres: { data: AlbumGenre[] }
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
  explicit_content_lyrics: number
  explicit_content_cover: number
  contributors: AlbumContributor[]
  artist: AlbumArtist
  type: string
  tracks: { data: AlbumTrack[] }
}