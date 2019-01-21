import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFormSystemComponent } from './view-form-system.component';

describe('ViewFormSystemComponent', () => {
  let component: ViewFormSystemComponent;
  let fixture: ComponentFixture<ViewFormSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFormSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFormSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
