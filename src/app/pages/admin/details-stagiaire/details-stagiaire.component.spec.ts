import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStagiaireComponent } from './details-stagiaire.component';

describe('DetailsStagiaireComponent', () => {
  let component: DetailsStagiaireComponent;
  let fixture: ComponentFixture<DetailsStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsStagiaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
