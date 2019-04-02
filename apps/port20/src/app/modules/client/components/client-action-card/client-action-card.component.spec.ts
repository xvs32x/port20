import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientActionCardComponent } from './client-action-card.component';

describe('ClientActionCardComponent', () => {
  let component: ClientActionCardComponent;
  let fixture: ComponentFixture<ClientActionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientActionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientActionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
