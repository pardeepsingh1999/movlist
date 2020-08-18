import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMovieDetailsComponent } from './one-movie-details.component';

describe('OneMovieDetailsComponent', () => {
  let component: OneMovieDetailsComponent;
  let fixture: ComponentFixture<OneMovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneMovieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
