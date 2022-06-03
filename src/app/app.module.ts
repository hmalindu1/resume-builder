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
import { AddContComponent } from './components/add-cont/add-cont.component';
import { CertsHeaderComponent } from './components/certs-header/certs-header.component';
import { CertsComponent } from './components/certs/certs.component';
import { CertItemComponent } from './components/cert-item/cert-item.component';
import { AddCertComponent } from './components/add-cert/add-cert.component';
import { EducsHeaderComponent } from './components/educs-header/educs-header.component';

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
    AddContComponent,
    CertsHeaderComponent,
    CertsComponent,
    CertItemComponent,
    AddCertComponent,
    EducsHeaderComponent,
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
