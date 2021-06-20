import got from 'got'
import { TrackResponse } from '../responses/track.response'

export function getTrack(trackId: number): Promise<TrackResponse> {
  return got(`https://api.deezer.com/track/${trackId}`).json()
}