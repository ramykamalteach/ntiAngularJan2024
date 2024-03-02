import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { ContactpageComponent } from './components/contactpage/contactpage.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {path: '', title: 'home page', component: HomepageComponent},
    {path: 'about', title: 'About us page', component: AboutpageComponent},
    {path: 'contacts', title: 'Contact us page', component: ContactpageComponent},

    {path: '**', title: 'Page not found', component: PagenotfoundComponent},
];
