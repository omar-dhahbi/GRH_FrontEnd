import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeEmployeeComponent } from './welcome-employee.component';

describe('WelcomeEmployeeComponent', () => {
  let component: WelcomeEmployeeComponent;
  let fixture: ComponentFixture<WelcomeEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
