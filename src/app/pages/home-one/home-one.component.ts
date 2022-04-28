import { Component, OnInit } from '@angular/core';
import { ROUTE_URLS } from 'src/app/enums/route-urls.enum';
import { IMAGES } from '../../settings/app.settings';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {

  readonly routesUrl = {
    practiceUrl: ROUTE_URLS.PRACTICE_URL,
    contactUrl: ROUTE_URLS.CONTACT_URL
  };
  
  images = IMAGES;
  constructor() { }

  ngOnInit(): void {
  }

}
