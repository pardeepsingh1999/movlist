import { Component, OnInit } from '@angular/core';

import { MovieDetailsService } from 'src/app/service/movie-details.service';

@Component({
  selector: 'app-all-movie-details',
  templateUrl: './all-movie-details.component.html',
  styleUrls: ['./all-movie-details.component.scss']
})
export class AllMovieDetailsComponent implements OnInit {

  constructor(
    private movieDetailsService: MovieDetailsService
    ) { }

  ngOnInit(): void {
    this.getAllMovie()
  }

  openMovieDetialDialog(id: any) {
    this.movieDetailsService.viewMovieDetialDialog(id);
  };

  getAllMovie() {
    this.movieDetailsService.getAllMovieDetials().subscribe(
      (res: any) => {
        if(res.success) {
          console.log(res)
        } else {
          this.movieDetailsService.openSnackBar(res.message, 'error')
        }
      },
      err => {
        console.log(err)
      }
    )
  }


}
