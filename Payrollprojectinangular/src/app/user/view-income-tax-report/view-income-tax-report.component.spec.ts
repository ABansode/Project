import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIncomeTaxReportComponent } from './view-income-tax-report.component';

describe('ViewIncomeTaxReportComponent', () => {
  let component: ViewIncomeTaxReportComponent;
  let fixture: ComponentFixture<ViewIncomeTaxReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIncomeTaxReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIncomeTaxReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
