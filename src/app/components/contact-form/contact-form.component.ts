import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  
  constructor(private contactService: ContactService) { }

  sendContactForm(f: NgForm) {
    this.contactService.sendContactForm(f.value).subscribe(res => console.log(res));
  }
}
