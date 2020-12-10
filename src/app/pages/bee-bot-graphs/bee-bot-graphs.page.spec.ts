import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeeBotGraphsPage } from './bee-bot-graphs.page';

describe('BeeBotGraphsPage', () => {
  let component: BeeBotGraphsPage;
  let fixture: ComponentFixture<BeeBotGraphsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeBotGraphsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeeBotGraphsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
