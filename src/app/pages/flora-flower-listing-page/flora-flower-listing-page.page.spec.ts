import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FloraFlowerListingPagePage } from './flora-flower-listing-page.page';

describe('FloraFlowerListingPagePage', () => {
  let component: FloraFlowerListingPagePage;
  let fixture: ComponentFixture<FloraFlowerListingPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloraFlowerListingPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FloraFlowerListingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
