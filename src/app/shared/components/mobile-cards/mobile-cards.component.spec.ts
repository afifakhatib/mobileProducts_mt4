import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCardsComponent } from './mobile-cards.component';

describe('MobileCardsComponent', () => {
  let component: MobileCardsComponent;
  let fixture: ComponentFixture<MobileCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
