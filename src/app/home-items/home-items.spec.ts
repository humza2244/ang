import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeItems } from './home-items';

describe('HomeItems', () => {
  let component: HomeItems;
  let fixture: ComponentFixture<HomeItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
