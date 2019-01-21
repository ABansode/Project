import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsGenerationComponent } from './reports-generation.component';

describe('ReportsGenerationComponent', () => {
  let component: ReportsGenerationComponent;
  let fixture: ComponentFixture<ReportsGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
