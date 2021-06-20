interface AlbumArtist {
  id: string
  name: string
  link: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  tracklist: string
  type: string
}

export interface SearchAlbumResponse {
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
  artist: AlbumArtist
  type: string
}