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

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  viewMovieDetialDialog(id: any) {
    console.log(id)
    let emp = {movieName:'pardeep'}
    const dialogRef = this.dialog.open(OneMovieDetailsComponent, {
      width: '600px',
      data: emp
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  getAllMovieDetials() {
    return this.http.get(environment.apiBaseUrl + '/movie/getAll/movieDetail');
  };

  getOneMovieDetials(movieId: any) {
    return this.http.get(environment.apiBaseUrl + '/movie/getOne/movieDetail/' + movieId);
  };

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  };

}
