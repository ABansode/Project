import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTypeReportGenerationComponent } from './all-type-report-generation.component';

describe('AllTypeReportGenerationComponent', () => {
  let component: AllTypeReportGenerationComponent;
  let fixture: ComponentFixture<AllTypeReportGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTypeReportGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTypeReportGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
