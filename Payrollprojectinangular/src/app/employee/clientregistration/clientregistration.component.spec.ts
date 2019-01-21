import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientregistrationComponent } from './clientregistration.component';

describe('ClientregistrationComponent', () => {
  let component: ClientregistrationComponent;
  let fixture: ComponentFixture<ClientregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
