import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @ViewChild('show') show: ElementRef<any>;
  readContent: string = 'Read More...';
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.show.nativeElement.style.display = 'none';
  }

  showContent = () => {
    if(this.show.nativeElement.style.display === 'none') {
      this.show.nativeElement.style.display = 'inline';
      this.readContent = 'Read Less...';
    } else {
      this.show.nativeElement.style.display = 'none';
      this.readContent = 'Read More...';
    }
  }

}
