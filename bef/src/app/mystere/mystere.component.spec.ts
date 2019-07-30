import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MystereComponent } from './mystere.component';

describe('MystereComponent', () => {
  let component: MystereComponent;
  let fixture: ComponentFixture<MystereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MystereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MystereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
