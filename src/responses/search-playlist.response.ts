export interface SearchPlaylistUser {
  id: number;
  name: string;
  tracklist: string;
  type: string;
}

export interface SearchPlaylistResponse {
  id: number;
  title: string;
  public: boolean;
  nb_tracks: number;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  checksum: string;
  tracklist: string;
  creation_date: string;
  md5_image: string;
  picture_type: string;
  user: SearchPlaylistUser;
  type: string;
}