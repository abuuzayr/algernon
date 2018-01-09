import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterActiveComponent } from './filter-active.component';

describe('FilterActiveComponent', () => {
  let component: FilterActiveComponent;
  let fixture: ComponentFixture<FilterActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
