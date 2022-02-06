import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBlockComponent } from './landing-block.component';

describe('LandingBlockComponent', () => {
  let component: LandingBlockComponent;
  let fixture: ComponentFixture<LandingBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
