import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceHighlightsComponent } from './experience-highlights.component';

describe('ExperienceHighlightsComponent', () => {
  let component: ExperienceHighlightsComponent;
  let fixture: ComponentFixture<ExperienceHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceHighlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
