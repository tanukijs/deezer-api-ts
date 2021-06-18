import got from 'got'
import { ArtistInterface } from './interfaces/Artist'

export function getArtist(artistId: number): Promise<ArtistInterface> {
  return got(`https://api.deezer.com/artist/${artistId}`).json()
}