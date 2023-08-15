import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentCardsComponent } from './employment-cards.component';

describe('EmploymentCardsComponent', () => {
  let component: EmploymentCardsComponent;
  let fixture: ComponentFixture<EmploymentCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploymentCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
