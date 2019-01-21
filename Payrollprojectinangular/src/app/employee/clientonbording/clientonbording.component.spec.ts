import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientonbordingComponent } from './clientonbording.component';

describe('ClientonbordingComponent', () => {
  let component: ClientonbordingComponent;
  let fixture: ComponentFixture<ClientonbordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientonbordingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientonbordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
