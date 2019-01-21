import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollprocessingComponent } from './payrollprocessing.component';

describe('PayrollprocessingComponent', () => {
  let component: PayrollprocessingComponent;
  let fixture: ComponentFixture<PayrollprocessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollprocessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollprocessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
