import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfilEmployeeComponent } from './update-profil-employee.component';

describe('UpdateProfilEmployeeComponent', () => {
  let component: UpdateProfilEmployeeComponent;
  let fixture: ComponentFixture<UpdateProfilEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfilEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProfilEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
