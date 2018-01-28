import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './routing/app-routing.module';
import { routingComponents } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
   imports:      [ BrowserModule,FormsModule ,HttpModule,AppRoutingModule,
  CarouselModule.forRoot() ],
  declarations: [ AppComponent, routingComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
