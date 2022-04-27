import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constants/base-url.constant";
import { API_URL } from "../enums/api-urls.enum";
import { Contact } from "../models/contact.model";
import { Response } from "../models/response.model";

@Injectable({
    providedIn: 'root'
})

export class ContactService {

    constructor(private http: HttpClient) {}
    
    sendContactForm(contactForm: Contact){
        return this.http.post( BASE_URL + API_URL.CONTACT_API_URL, {contactForm}) as Observable<Response>;
    }

    sendPhoneNumber(phoneNumber: number) {
        return this.http.post( BASE_URL + API_URL.REACH_ME_BACK_API_URL, {phoneNumber}) as Observable<Response>;
    }
}