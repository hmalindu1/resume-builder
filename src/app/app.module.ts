import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ExpsComponent } from './components/exps/exps.component';
import { ExpItemComponent } from './components/exp-item/exp-item.component';
import { AddExpComponent } from './components/add-exp/add-exp.component';
import { InfoComponent } from './components/info/info.component';
import { ContsComponent } from './components/conts/conts.component';
import { ContItemComponent } from './components/cont-item/cont-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ExpsComponent,
    ExpItemComponent,
    AddExpComponent,
    InfoComponent,
    ContsComponent,
    ContItemComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
