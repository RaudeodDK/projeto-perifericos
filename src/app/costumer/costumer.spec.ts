import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Costumer } from './costumer';

describe('Costumer', () => {
  let component: Costumer;
  let fixture: ComponentFixture<Costumer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Costumer],
    }).compileComponents();

    fixture = TestBed.createComponent(Costumer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
