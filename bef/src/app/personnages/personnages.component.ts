import { Component, OnInit } from '@angular/core';

import { Personnages } from 'src/app/modeles/personnages.model';
import { PersonnagesService } from 'src/app/services/personnages.service';

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.css']
})
export class PersonnagesComponent implements OnInit {

  personnages: Personnages[] = [];

  constructor(
    private personnagesService: PersonnagesService,
  ) {
    this.personnages = this.personnagesService.personnages;
  }

  ngOnInit() {
  }

  onDelete(personnage) {
    this.personnagesService.delete(personnage);
  }
}
