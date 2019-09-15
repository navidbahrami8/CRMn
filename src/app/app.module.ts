import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CarouselComponent } from './carousel/carousel.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';
import { Menu4Component } from './menu4/menu4.component';
import { Menu1sComponent } from './menu1s/menu1s.component';
import { Menu1aComponent } from './menu1a/menu1a.component';
import { Menu1bComponent } from './menu1b/menu1b.component';
import { Menu1cComponent } from './menu1c/menu1c.component';
import { Menu1dComponent } from './menu1d/menu1d.component';
import { Menu1eComponent } from './menu1e/menu1e.component';
import { Menu1fComponent } from './menu1f/menu1f.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    RightbodyComponent,
    CarouselComponent,
     Menu2Component, Menu3Component, Menu4Component,
      Menu1sComponent, Menu1aComponent, Menu1bComponent, Menu1cComponent,
       Menu1dComponent, Menu1eComponent, Menu1fComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatListModule,
    MatIconModule,
    MatDatepickerModule,
    MatSidenavModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
