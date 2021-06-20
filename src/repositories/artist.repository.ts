import got from 'got'
import { ArtistResponse } from '../responses/artist.response'
import { ArtistAlbumResponse } from '../responses/artist-albums.response'

export function getArtist(artistId: number): Promise<ArtistResponse> {
  return got(`https://api.deezer.com/artist/${artistId}`).json()
}

export function getArtistAlbums(artistId: number): Promise<ArtistAlbumResponse> {
  return got(`https://api.deezer.com/artist/${artistId}/albums`).json()
}