import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePassword1Component } from './update-password1.component';

describe('UpdatePassword1Component', () => {
  let component: UpdatePassword1Component;
  let fixture: ComponentFixture<UpdatePassword1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePassword1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePassword1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
