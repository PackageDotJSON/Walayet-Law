import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice-details',
  templateUrl: './practice-details.component.html',
  styleUrls: ['./practice-details.component.scss']
})
export class PracticeDetailsComponent implements OnInit {

  nameOfLaw: string;
  
  constructor(private router: Router) {
    this.nameOfLaw = this.router.getCurrentNavigation().extras.state?.name || 'ADR Law';
  }

  ngOnInit(): void {}

}
