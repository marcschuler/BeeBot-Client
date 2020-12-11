import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServerStatsPage } from './server-stats.page';

describe('ServerStatsPage', () => {
  let component: ServerStatsPage;
  let fixture: ComponentFixture<ServerStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerStatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServerStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
