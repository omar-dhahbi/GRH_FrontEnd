import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStagiareComponent } from './update-stagiare.component';

describe('UpdateStagiareComponent', () => {
  let component: UpdateStagiareComponent;
  let fixture: ComponentFixture<UpdateStagiareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStagiareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateStagiareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
