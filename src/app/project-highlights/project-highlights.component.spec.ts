import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHighlightsComponent } from './project-highlights.component';

describe('ProjectHighlightsComponent', () => {
  let component: ProjectHighlightsComponent;
  let fixture: ComponentFixture<ProjectHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectHighlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
