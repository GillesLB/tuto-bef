import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from 'src/app/accueil/accueil.component';
import { PersonnagesComponent } from 'src/app/personnages/personnages.component';
import { AjouterPersonnageComponent } from 'src/app/ajouter-personnage/ajouter-personnage.component';
import { PersonnageDetailComponent } from 'src/app/personnage-detail/personnage-detail.component';
import { MystereComponent } from 'src/app/mystere/mystere.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'personnages', component: PersonnagesComponent},
  {path: 'personnages/:id', component: PersonnageDetailComponent},
  {path: 'ajouter', component: AjouterPersonnageComponent},
  {path: 'mystere', component: MystereComponent},
  {path: '**', component: AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
