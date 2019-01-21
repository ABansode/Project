import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidLoginComponent } from './invalid-login.component';

describe('InvalidLoginComponent', () => {
  let component: InvalidLoginComponent;
  let fixture: ComponentFixture<InvalidLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
