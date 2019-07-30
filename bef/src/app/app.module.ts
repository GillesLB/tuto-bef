import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PersonnagesComponent } from './personnages/personnages.component';
import { PersonnageDetailComponent } from './personnage-detail/personnage-detail.component';
import { AjouterPersonnageComponent } from './ajouter-personnage/ajouter-personnage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MystereComponent } from './mystere/mystere.component';
import { PersonnagesService } from 'src/app/services/personnages.service';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PersonnagesComponent,
    PersonnageDetailComponent,
    AjouterPersonnageComponent,
    NavigationComponent,
    MystereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PersonnagesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
