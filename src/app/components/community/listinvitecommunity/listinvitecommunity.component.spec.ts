import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListinvitecommunityComponent } from './listinvitecommunity.component';

describe('ListinvitecommunityComponent', () => {
  let component: ListinvitecommunityComponent;
  let fixture: ComponentFixture<ListinvitecommunityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListinvitecommunityComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListinvitecommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
