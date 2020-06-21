import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SideStickyComponent } from './side-sticky.component';

describe('SideStickyComponent', () => {
  let component: SideStickyComponent;
  let fixture: ComponentFixture<SideStickyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideStickyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SideStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
