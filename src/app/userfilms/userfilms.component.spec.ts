import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfilmsComponent } from './userfilms.component';

describe('UserfilmsComponent', () => {
  let component: UserfilmsComponent;
  let fixture: ComponentFixture<UserfilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfilmsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
