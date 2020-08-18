import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MovieDetails } from '../../models/movie-details.module';

@Component({
  selector: 'app-one-movie-details',
  templateUrl: './one-movie-details.component.html',
  styleUrls: ['./one-movie-details.component.scss']
})
export class OneMovieDetailsComponent implements OnInit {

  apiImgUrl = 'http://localhost:3000';

  constructor(
    public dialogRef: MatDialogRef<OneMovieDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MovieDetails
  ) { }

  ngOnInit(): void {
  }

}
