import got from 'got'
import { AlbumInterface } from './interfaces/Album'

export function getAlbum(albumId: number): Promise<AlbumInterface> {
  return got(`https://api.deezer.com/album/${albumId}`).json()
}