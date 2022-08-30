import { Component, EventEmitter, ElementRef, ViewChild, AfterViewInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-attorney-details',
  templateUrl: './attorney-details.component.html',
  styleUrls: ['./attorney-details.component.scss']
})
export class AttorneyDetailsComponent implements AfterViewInit {
  @Input() attorneyDetails: string;
  @Output() isModalClosed = new EventEmitter<boolean>();
  @ViewChild('modalTriggerButton') modalTriggerButton: ElementRef<any>;

  ngAfterViewInit() {
    this.modalTriggerButton.nativeElement.click();
  }

  modalClosed(value) {
    this.isModalClosed.emit(value);
  }
}
