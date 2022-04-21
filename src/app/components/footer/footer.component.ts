import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  phoneNumber: number;
  isInValid = false;

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
    this.contactService.sendPhoneNumber(this.phoneNumber).subscribe(res => console.log(res));
  }

}
