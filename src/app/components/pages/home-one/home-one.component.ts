import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../../settings/app.settings';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {

  images = IMAGES;
  constructor() { }

  ngOnInit(): void {
  }

}
