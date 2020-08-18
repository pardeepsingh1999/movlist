import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { OneMovieDetailsComponent } from '../modules/one-movie-details/one-movie-details.component';

import { environment } from 'src/environments/environment';
import { MovieDetails } from '../models/movie-details.module';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  allMovieData    : MovieDetails[];
  filterMovieData : MovieDetails[];
  movieDetails    : MovieDetails;

  apiImgUrl = 'http://localhost:3000';

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  getAllMovieDetials() {
    return this.http.get(environment.apiBaseUrl + '/movie/getAll/movieDetail');
  };

  getOneMovieDetials(movieId: any) {
    return this.http.get(environment.apiBaseUrl + '/movie/getOne/movieDetail/' + movieId);
  };

  viewMovieDetialDialog(id: any) {
    // console.log(id)

    this.getOneMovieDetials(id).subscribe(
      (res: any) => {
        if(res.success) {
          // console.log(res)
          this.movieDetails = res.data;
          this.movieDetails['releasedDate'] = new Date(this.movieDetails.releasedDate);
          const dialogRef = this.dialog.open(OneMovieDetailsComponent, {
            width: '600px',
            data: this.movieDetails
          });

          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            // this.animal = result;
          });
        } else {
          this.openSnackBar(res.message, 'error')
        }
      },
      err => {
        console.log(err)
      }
    )
  };

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  };

  onSearchClear() {
    console.log('clear')
    this.getAllMovie();
  };

  filterMovieByName(movieName: string) {
    // console.log(movieName)

    this.allMovieData = this.filterMovieData;

    var regexp = new RegExp(movieName+'.+$', 'i');

    this.allMovieData = this.filterMovieData.filter(elem => {
        return elem["movieName"].search(regexp) !== -1;
    });

  };

  getAllMovie() {
    this.getAllMovieDetials().subscribe(
      (res: any) => {
        if(res.success) {
          // console.log(res)
          this.allMovieData = res.data;
          this.filterMovieData = res.data;
          // console.log(this.allMovieData)

        } else {
          this.openSnackBar(res.message, 'error')
        }
      },
      err => {
        console.log(err)
      }
    )
  }

}
