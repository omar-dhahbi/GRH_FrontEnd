import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidbarEmployeesComponent } from './sidbar-employees.component';

describe('SidbarEmployeesComponent', () => {
  let component: SidbarEmployeesComponent;
  let fixture: ComponentFixture<SidbarEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidbarEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidbarEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
