import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_URLS } from 'src/app/enums/route-urls.enum';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent {
  readonly homeUrl = ROUTE_URLS.HOME_URL;

  constructor(private router: Router) { }

  navigateToDetails(law) {
    this.router.navigateByUrl('/practice-details', {state: {name: law}});
  }
}
