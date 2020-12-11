import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompGenericComponent } from './comp-generic.component';

describe('CompGenericComponent', () => {
  let component: CompGenericComponent;
  let fixture: ComponentFixture<CompGenericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompGenericComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
