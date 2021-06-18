import got from 'got'
import { TrackInterface } from './interfaces/Track'

export function getTrack(trackId: number): Promise<TrackInterface> {
  return got(`https://api.deezer.com/track/${trackId}`).json()
}