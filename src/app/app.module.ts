import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { routes } from './routes/routes';

import { AppComponent } from './app.component';
import { HomeOneComponent } from './pages/home-one/home-one.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { AboutComponent } from './pages/about/about.component';
import { AttorneyComponent } from './pages/attorney/attorney.component';
import { PracticeComponent } from './pages/practice/practice.component';
import { PracticeDetailsComponent } from './pages/practice-details/practice-details.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ErrorComponent } from './pages/error/error.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AttorneyDetailsComponent } from './components/attorney-details/attorney-details.component';
import { GalleryComponent } from './pages/gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeOneComponent,
    NavbarComponent,
    FooterComponent,
    PreloaderComponent,
    AboutComponent,
    AttorneyComponent,
    PracticeComponent,
    PracticeDetailsComponent,
    AppointmentComponent,
    ErrorComponent,
    PrivacyPolicyComponent,
    ContactComponent,
    ClientsComponent,
    ContactFormComponent,
    AttorneyDetailsComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    FormsModule,
    HttpClientModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
