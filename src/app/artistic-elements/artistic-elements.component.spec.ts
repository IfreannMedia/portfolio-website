import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisticElementsComponent } from './artistic-elements.component';

describe('ArtisticElementsComponent', () => {
  let component: ArtisticElementsComponent;
  let fixture: ComponentFixture<ArtisticElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtisticElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisticElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
