import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllMovieDetailsComponent } from 'src/app/modules/all-movie-details/all-movie-details.component';
import { OneMovieDetailsComponent } from 'src/app/modules/one-movie-details/one-movie-details.component';

@NgModule({
  declarations: [
    DefaultComponent,
    AllMovieDetailsComponent,
    OneMovieDetailsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatSnackBarModule,

  ]
})
export class DefaultModule { }
