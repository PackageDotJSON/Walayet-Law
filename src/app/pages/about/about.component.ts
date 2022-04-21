import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  readContent: string = 'Read More...';
  isReadMore: boolean = true;

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
