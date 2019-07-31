import { Component, OnInit } from '@angular/core';

import { Personnages } from 'src/app/modeles/personnages.model';
import { PersonnagesService } from 'src/app/services/personnages.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-personnage',
  templateUrl: './ajouter-personnage.component.html',
  styleUrls: ['./ajouter-personnage.component.css']
})
export class AjouterPersonnageComponent implements OnInit {

  personnages: Personnages[] = [];

  ajouterHerosForm: FormGroup;

  constructor(
    private router: Router,
    private personnagesService: PersonnagesService,
  ) {
    this.personnages = this.personnagesService.personnages;
  }

  ngOnInit() {
    this.ajouterHerosForm = new FormGroup({
      nom: new FormControl(),
      role: new FormControl(),
      pays: new FormControl(),
    });
  }

  ajouterHeros() {
    const nom = this.ajouterHerosForm.get('nom').value;
    const role = this.ajouterHerosForm.get('role').value;
    const pays = this.ajouterHerosForm.get('pays').value;
    const id = this.personnages.length + 1;
    const herosAAjouter = new Personnages(role, nom, pays, id);

    this.personnagesService.personnages.push(herosAAjouter);
    this.router.navigate(['personnages']);
  }

}
