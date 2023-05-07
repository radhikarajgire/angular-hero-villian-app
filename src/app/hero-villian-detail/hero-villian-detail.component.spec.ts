import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroVillianDetailComponent } from './hero-villian-detail.component';

describe('HeroVillianDetailComponent', () => {
  let component: HeroVillianDetailComponent;
  let fixture: ComponentFixture<HeroVillianDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroVillianDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroVillianDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
