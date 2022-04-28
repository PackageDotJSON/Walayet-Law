import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'bootstrap-sweetalert';
import { ROUTE_URLS } from 'src/app/enums/route-urls.enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  readonly routesUrl = {
    homeUrl: ROUTE_URLS.HOME_URL,
    aboutUrl: ROUTE_URLS.ABOUT_URL,
    attorneyUrl: ROUTE_URLS.ATTORNEY_URL,
    contactUrl: ROUTE_URLS.CONTACT_URL,
    privacyPolicyUrl: ROUTE_URLS.PRIVACY_POLICY_URL
  };

  phoneNumber: number;
  isInValid = false;
  isLoading = false;

  constructor(private router: Router, private contactService: ContactService) { }

  navigateToDetails(law) {
    this.router.navigateByUrl(ROUTE_URLS.PRACTICE_DETAILS_URL, {state: {name: law}});
  }

  reachMeBack() {
    const phoneStr = this.phoneNumber.toString();
    if(phoneStr.length < 10 || phoneStr.length > 15) {
      this.isInValid = true;
      return;
    }
    this.isInValid = false;
    this.contactService.sendPhoneNumber(this.phoneNumber).pipe(tap((res) => {
      res.statusCode === 200 ? Swal('Success', res.message, 'success'): Swal('Danger', res.message, 'danger');
        this.isLoading = false;
    })).subscribe();
  }

}
