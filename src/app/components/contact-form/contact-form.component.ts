import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'bootstrap-sweetalert';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  isLoading = false;

  constructor(private contactService: ContactService) { }

  sendContactForm(f: NgForm) {
    this.isLoading = true;
    this.contactService.sendContactForm(f.value).pipe(tap((res) => {
        res.statusCode === 200 ? Swal('Success', res.message, 'success'): Swal('Danger', res.message, 'danger');
        this.isLoading = false;
    })).subscribe();
  }
}
