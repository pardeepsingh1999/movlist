export class MovieDetails {

  _id: String;

  movieName:        String;
  movieDescription: String;
  moviePoster:      String;
  rated:            String;

  releasedDate: Date;

  imbd_rating: Number;

  genre:        string[];
  directorName: string[];
  writerName:   string[];
  actorName:    string[];

}
