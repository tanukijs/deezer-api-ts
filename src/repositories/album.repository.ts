import got from 'got'
import { AlbumResponse } from '../responses/album.response'
import { AlbumTracksResponse } from '../responses/album-tracks.response'
import { AlbumFansResponse } from '../responses/album-fans.response'

export function getAlbum(albumId: number): Promise<AlbumResponse> {
  return got(`https://api.deezer.com/album/${albumId}`).json()
}

export function getAlbumTracks(albumId: number): Promise<AlbumTracksResponse> {
  return got(`https://api.deezer.com/album/${albumId}/tracks`).json()
}

export function getAlbumFans(albumId: number): Promise<AlbumFansResponse> {
  return got(`https://api.deezer.com/album/${albumId}/fans`).json()
}