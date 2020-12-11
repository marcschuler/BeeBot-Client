import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeebotAddPage } from './beebot-add.page';

describe('BeebotAddPage', () => {
  let component: BeebotAddPage;
  let fixture: ComponentFixture<BeebotAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeebotAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeebotAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
