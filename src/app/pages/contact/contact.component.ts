import { Component, OnInit } from '@angular/core';
import { ROUTE_URLS } from 'src/app/enums/route-urls.enum';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  readonly homeUrl = ROUTE_URLS.HOME_URL;
  constructor() { }

  ngOnInit(): void {
  }

}
