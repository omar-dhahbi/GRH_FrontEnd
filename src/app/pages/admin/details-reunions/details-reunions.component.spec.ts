import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReunionsComponent } from './details-reunions.component';

describe('DetailsReunionsComponent', () => {
  let component: DetailsReunionsComponent;
  let fixture: ComponentFixture<DetailsReunionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsReunionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsReunionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
