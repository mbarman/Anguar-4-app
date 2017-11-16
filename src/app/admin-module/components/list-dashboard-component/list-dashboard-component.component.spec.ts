import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDashboardComponentComponent } from './list-dashboard-component.component';

describe('ListDashboardComponentComponent', () => {
  let component: ListDashboardComponentComponent;
  let fixture: ComponentFixture<ListDashboardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDashboardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDashboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
