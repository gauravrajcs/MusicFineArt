import { NgModule }      from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent }   from '../app.component';
import { HomeComponent }   from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { AboutUsComponent } from '../aboutUs/aboutUs.component';
import { ContactUsComponent } from '../contactUs/contactUs.component';
import { EventsComponent } from '../events/events.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home',component:HomeComponent },
    {path: 'home/aboutUs',component:AboutUsComponent },
    {path: 'events',component:EventsComponent },
    {path: 'gallery',component:GalleryComponent },
    {path: 'contactUs',component:ContactUsComponent }
   ]

@NgModule
({
  imports:
  [ RouterModule.forRoot(routes) ],
  exports:
  [RouterModule]
})
export class AppRoutingModule{}
export const routingComponents =
[
    AppComponent, HomeComponent,HeaderComponent, 
    FooterComponent,AboutUsComponent,EventsComponent, GalleryComponent,
    ContactUsComponent
    
]