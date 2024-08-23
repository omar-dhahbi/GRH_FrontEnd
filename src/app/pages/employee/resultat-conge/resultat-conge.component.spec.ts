import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatCongeComponent } from './resultat-conge.component';

describe('ResultatCongeComponent', () => {
  let component: ResultatCongeComponent;
  let fixture: ComponentFixture<ResultatCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatCongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultatCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
