import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDesconto } from './banner-desconto';

describe('BannerDesconto', () => {
  let component: BannerDesconto;
  let fixture: ComponentFixture<BannerDesconto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerDesconto],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerDesconto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
