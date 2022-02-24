import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSlideshowComponent } from './skills-slideshow.component';

describe('SkillsSlideshowComponent', () => {
  let component: SkillsSlideshowComponent;
  let fixture: ComponentFixture<SkillsSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsSlideshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
