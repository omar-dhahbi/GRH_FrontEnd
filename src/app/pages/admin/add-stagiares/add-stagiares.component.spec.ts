import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStagiaresComponent } from './add-stagiares.component';

describe('AddStagiaresComponent', () => {
  let component: AddStagiaresComponent;
  let fixture: ComponentFixture<AddStagiaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStagiaresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStagiaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
