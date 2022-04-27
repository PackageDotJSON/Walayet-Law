import { Component, OnInit } from '@angular/core';
import { ROUTE_URLS } from 'src/app/enums/route-urls.enum';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  readonly homeUrl = ROUTE_URLS.HOME_URL;
  constructor() { }

  ngOnInit(): void {
  }

}
