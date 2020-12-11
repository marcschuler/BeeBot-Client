import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeebotPage } from './beebot.page';

describe('BeebotPage', () => {
  let component: BeebotPage;
  let fixture: ComponentFixture<BeebotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeebotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeebotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
