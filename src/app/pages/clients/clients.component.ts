import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../../settings/app.settings';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  images = IMAGES;
  constructor() { }

  ngOnInit(): void {
  }

}
