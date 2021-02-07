import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListingFloraComponent } from './listing-flora.component';

describe('ListingFloraComponent', () => {
  let component: ListingFloraComponent;
  let fixture: ComponentFixture<ListingFloraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingFloraComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListingFloraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
