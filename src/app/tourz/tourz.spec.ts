import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tourz } from './tourz';

describe('Tourz', () => {
  let component: Tourz;
  let fixture: ComponentFixture<Tourz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tourz],
    }).compileComponents();

    fixture = TestBed.createComponent(Tourz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
