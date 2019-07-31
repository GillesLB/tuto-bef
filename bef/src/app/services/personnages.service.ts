import { Injectable } from '@angular/core';

import { Personnages } from 'src/app/modeles/personnages.model';

@Injectable({
  providedIn: 'root'
})
export class PersonnagesService {

  personnages: Personnages[] = [
    {nom: 'Jean-Claude DUSS', role: 'Tombeur', pays: 'France', id: 1},
    {nom: 'Naruto UZUMAKI', role: 'Ninja', pays: 'Konoa', id: 2},
    {nom: 'Saitama', role: 'Balèze', pays: 'Japon', id: 3},
    {nom: 'Hello KITTY', role: 'Kawaii', pays: 'Partout', id: 4},
    {nom: 'Batman', role: 'Milliardaire', pays: 'Secret', id: 5},
    {nom: 'Indiana JONES', role: 'Archéologue', pays: 'USA', id: 6},
    {nom: 'Luke SKYWALKER', role: 'Sauveur', pays: 'Loin', id: 7},
  ];

  constructor() { }

  delete(personnage) {
  const personnageASupprimer = this.personnages.findIndex(
    (persoIndex) => {
      if (persoIndex === personnage) {
        return true;
      }
    }
  );
  this.personnages.splice(personnageASupprimer, 1);
  }

}
