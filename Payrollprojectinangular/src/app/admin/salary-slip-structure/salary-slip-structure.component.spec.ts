import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarySlipStructureComponent } from './salary-slip-structure.component';

describe('SalarySlipStructureComponent', () => {
  let component: SalarySlipStructureComponent;
  let fixture: ComponentFixture<SalarySlipStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarySlipStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarySlipStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
