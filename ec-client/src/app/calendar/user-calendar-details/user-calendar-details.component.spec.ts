import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCalendarDetailsComponent } from './user-calendar-details.component';

describe('UserCalendarDetailsComponent', () => {
  let component: UserCalendarDetailsComponent;
  let fixture: ComponentFixture<UserCalendarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCalendarDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCalendarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
