import { Component, OnInit } from '@angular/core';

import { MovieDetailsService } from 'src/app/service/movie-details.service';

@Component({
  selector: 'app-all-movie-details',
  templateUrl: './all-movie-details.component.html',
  styleUrls: ['./all-movie-details.component.scss']
})
export class AllMovieDetailsComponent implements OnInit {

  constructor(
    public movieDetailsService: MovieDetailsService
    ) { }

  ngOnInit(): void {
    this.movieDetailsService.getAllMovie();
  }

  openMovieDetialDialog(id: any) {
    this.movieDetailsService.viewMovieDetialDialog(id);
  };

};
