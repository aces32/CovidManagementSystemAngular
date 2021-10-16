import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualLabsComponent } from './individual-labs.component';

describe('IndividualLabsComponent', () => {
  let component: IndividualLabsComponent;
  let fixture: ComponentFixture<IndividualLabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualLabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
