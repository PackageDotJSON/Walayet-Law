import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'bootstrap-sweetalert';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  phoneNumber: number;
  isInValid = false;
  isLoading = false;

  constructor(private router: Router, private contactService: ContactService) { }

  navigateToDetails(law) {
    this.router.navigateByUrl('/practice-details', {state: {name: law}})
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
