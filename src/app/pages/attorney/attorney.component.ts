import { Component } from '@angular/core';
import { ROUTE_URLS } from 'src/app/enums/route-urls.enum';

@Component({
  selector: 'app-attorney',
  templateUrl: './attorney.component.html',
  styleUrls: ['./attorney.component.scss']
})
export class AttorneyComponent {
  isValid = false;
  attorney: string;
  readonly homeUrl = ROUTE_URLS.HOME_URL;

  closeModal(modalCondition) {
    this.isValid = !modalCondition;
  }
}
