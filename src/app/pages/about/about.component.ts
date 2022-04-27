import { Component, OnInit } from '@angular/core';
import { ROUTE_URLS } from 'src/app/enums/route-urls.enum';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  readContent: string = 'Read More...';
  isReadMore: boolean = true;
  readonly routeUrls = {
    homeUrl: ROUTE_URLS.HOME_URL,
    practiceUrl: ROUTE_URLS.PRACTICE_URL
  }

  constructor() {}

  ngOnInit(): void {}

  showContent = () => {
    this.isReadMore = false;
    this.readContent = 'Read Less...';
  }

  readLess = () => {
    this.readContent = 'Read More...';
    this.isReadMore = true;
  }

}
