import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attorney',
  templateUrl: './attorney.component.html',
  styleUrls: ['./attorney.component.scss']
})
export class AttorneyComponent implements OnInit {

  isValid = false;
  attorney: string;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(modalCondition) {
    this.isValid = !modalCondition;
  }

}
