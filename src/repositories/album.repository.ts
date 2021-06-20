import got from 'got'
import { AlbumResponse } from '../responses/album.response'
import { AlbumTracksResponse } from '../responses/album-tracks.response'

export function getAlbum(albumId: number): Promise<AlbumResponse> {
  return got(`https://api.deezer.com/album/${albumId}`).json()
}

export function getAlbumTracks(albumId: number): Promise<AlbumTracksResponse> {
  return got(`https://api.deezer.com/album/${albumId}/tracks`).json()
}