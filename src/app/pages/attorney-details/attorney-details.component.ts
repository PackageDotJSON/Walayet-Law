import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LAWYER_DETAILS } from '../../settings/app.settings';

@Component({
  selector: 'app-attorney-details',
  templateUrl: './attorney-details.component.html',
  styleUrls: ['./attorney-details.component.scss']
})
export class AttorneyDetailsComponent {
  
  lawyersDetails = LAWYER_DETAILS;
  lawyerData: any;
  counter = 0;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(data => {
    this.lawyersDetails.forEach((item, index) => {
        if(item.name.includes(data.id)) {
          this.lawyerData = item;
          this.counter = index;
        }
      })
    });
  }

  next() {
    this.counter >= 11 ? this.counter = 0 : this.counter++;
    this.lawyerData = this.lawyersDetails[this.counter];
  }

  previous() {
    this.counter <= 0 ? this.counter = 11 : this.counter--;
    this.lawyerData = this.lawyersDetails[this.counter];
  }

}
