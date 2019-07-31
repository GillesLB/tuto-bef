import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Personnages } from 'src/app/modeles/personnages.model';
import { PersonnagesService } from 'src/app/services/personnages.service';

@Component({
  selector: 'app-personnage-detail',
  templateUrl: './personnage-detail.component.html',
  styleUrls: ['./personnage-detail.component.css']
})
export class PersonnageDetailComponent implements OnInit {

  personnages: Personnages[] = [];
  personnage: Personnages;
  id: string;

  constructor(
    private personnagesService: PersonnagesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.personnages = this.personnagesService.personnages;
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.personnage = this.personnages[+this.id - 1];
  }

  goToDashboard() {
    this.router.navigate(['personnages']);
  }

}
