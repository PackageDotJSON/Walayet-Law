import { Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { AppointmentComponent } from '../pages/appointment/appointment.component';
import { AttorneyComponent } from '../pages/attorney/attorney.component';
import { ClientsComponent } from '../pages/clients/clients.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { ErrorComponent } from '../pages/error/error.component';
import { GalleryComponent } from '../pages/gallery/gallery.component';
import { HomeOneComponent } from '../pages/home-one/home-one.component';
import { PracticeDetailsComponent } from '../pages/practice-details/practice-details.component';
import { PracticeComponent } from '../pages/practice/practice.component';
import { PrivacyPolicyComponent } from '../pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'about', component: AboutComponent},
    {path: 'attorney', component: AttorneyComponent},
    {path: 'practice', component: PracticeComponent},
    {path: 'practice-details', component: PracticeDetailsComponent},
    {path: 'appointment', component: AppointmentComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'clients', component: ClientsComponent},
    {path: 'gallery', component: GalleryComponent},
    // Here add new pages component

    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list
];
