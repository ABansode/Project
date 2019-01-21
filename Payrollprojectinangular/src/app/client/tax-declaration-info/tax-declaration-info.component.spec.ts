import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDeclarationInfoComponent } from './tax-declaration-info.component';

describe('TaxDeclarationInfoComponent', () => {
  let component: TaxDeclarationInfoComponent;
  let fixture: ComponentFixture<TaxDeclarationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxDeclarationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDeclarationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
