import { Component } from '@angular/core';
import { ROUTE_URLS } from 'src/app/enums/route-urls.enum';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
  readonly homeUrl = ROUTE_URLS.HOME_URL;
}
