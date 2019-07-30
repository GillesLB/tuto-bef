import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPersonnageComponent } from './ajouter-personnage.component';

describe('AjouterPersonnageComponent', () => {
  let component: AjouterPersonnageComponent;
  let fixture: ComponentFixture<AjouterPersonnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPersonnageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
