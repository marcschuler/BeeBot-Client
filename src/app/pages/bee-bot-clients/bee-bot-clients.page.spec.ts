import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeeBotClientsPage } from './bee-bot-clients.page';

describe('BeeBotClientsPage', () => {
  let component: BeeBotClientsPage;
  let fixture: ComponentFixture<BeeBotClientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeBotClientsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeeBotClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
