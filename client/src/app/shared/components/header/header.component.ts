import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class HeaderComponent implements OnInit {

  placeholder = 'Search your favorite Movie!';

  onResize(event: any){
    // event.target.innerWidth; // window width
    if (event.target.innerWidth < 641) {
        this.placeholder = "Search Movie";
    } else {
        this.placeholder = "Search your favorite Movie!";
    }
  }

  constructor() { }

  ngOnInit(): void {
      // console.log(window.innerWidth)
      if (window.innerWidth < 641) {
          this.placeholder = "Search Movie";
      } else {
          this.placeholder = "Search your favorite Movie!";
      }
  }

  OnSearch(data: any) {
    // console.log(data.target.value.length)
    if(data.target.value.length == 0) {
      console.log('clear')
    }
  }
  filterDataByName(data: any) {
    console.log(data.target.value)
  }
}
