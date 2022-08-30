import { Component } from '@angular/core';
import { ROUTE_URLS } from 'src/app/enums/route-urls.enum';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  readonly homeUrl = ROUTE_URLS.HOME_URL;
}
