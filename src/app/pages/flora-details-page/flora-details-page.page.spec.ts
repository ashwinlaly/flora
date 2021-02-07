import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FloraDetailsPagePage } from './flora-details-page.page';

describe('FloraDetailsPagePage', () => {
  let component: FloraDetailsPagePage;
  let fixture: ComponentFixture<FloraDetailsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloraDetailsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FloraDetailsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
