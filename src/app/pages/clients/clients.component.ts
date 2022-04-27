import { Component, OnInit } from '@angular/core';
import { ROUTE_URLS } from 'src/app/enums/route-urls.enum';
import { IMAGES } from '../../settings/app.settings';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  readonly homeUrl = ROUTE_URLS.HOME_URL;
  images = IMAGES;
  constructor() { }

  ngOnInit(): void {
  }

}
