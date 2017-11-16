import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeInventoryComponentComponent } from './analyze-inventory-component.component';

describe('AnalyzeInventoryComponentComponent', () => {
  let component: AnalyzeInventoryComponentComponent;
  let fixture: ComponentFixture<AnalyzeInventoryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeInventoryComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeInventoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
