import { Component } from '@angular/core';
import { ROUTE_URLS } from 'src/app/enums/route-urls.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  readonly routesUrl = {
    homeUrl : ROUTE_URLS.HOME_URL,
    aboutUrl : ROUTE_URLS.ABOUT_URL,
    clientsUrl : ROUTE_URLS.CLIENTS_URL,
    attorneyUrl : ROUTE_URLS.ATTORNEY_URL,
    practiceUrl : ROUTE_URLS.PRACTICE_URL,
    practiceDetailsUrl : ROUTE_URLS.PRACTICE_DETAILS_URL,
    appointmentUrl : ROUTE_URLS.APPOINTMENT_URL,
    galleryUrl : ROUTE_URLS.GALLERY_URL,
    privacyPolicyUrl : ROUTE_URLS.PRIVACY_POLICY_URL,
    contactUrl : ROUTE_URLS.CONTACT_URL
  };
}
