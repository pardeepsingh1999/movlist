import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AllMovieDetailsComponent } from './modules/all-movie-details/all-movie-details.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/movie-details', pathMatch: 'full'
  },
  {
    path: '', component: DefaultComponent,
    children: [
      { path: 'movie-details', component: AllMovieDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
