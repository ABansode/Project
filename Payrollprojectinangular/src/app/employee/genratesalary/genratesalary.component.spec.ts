import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenratesalaryComponent } from './genratesalary.component';

describe('GenratesalaryComponent', () => {
  let component: GenratesalaryComponent;
  let fixture: ComponentFixture<GenratesalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenratesalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenratesalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
