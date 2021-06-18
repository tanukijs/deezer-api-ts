import got from 'got'
import { GenreInterface } from './interfaces/Genre'
import { ArtistInterface } from './interfaces/Artist'
import { RadioInterface } from './interfaces/Radio'
import { PodcastInterface } from './interfaces/Podcast'

export function getGenres(): Promise<GenreInterface[]> {
  return got(`https://api.deezer.com/genre`).json()
}

export function getGenre(genreId: number): Promise<GenreInterface> {
  return got(`https://api.deezer.com/genre/${genreId}`).json()
}

export function getGenreArtists(genreId: number): Promise<ArtistInterface[]> {
  return got(`https://api.deezer.com/genre/${genreId}/artists`).json()
}

export function getGenreRadios(genreId: number): Promise<RadioInterface[]> {
  return got(`https://api.deezer.com/genre/${genreId}/radios`).json()
}

export function getGenrePodcasts(genreId: number): Promise<PodcastInterface[]> {
  return got(`https://api.deezer.com/genre/${genreId}/podcasts`).json()
}