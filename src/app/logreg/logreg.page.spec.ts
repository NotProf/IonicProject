import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogregPage } from './logreg.page';

describe('LogregPage', () => {
  let component: LogregPage;
  let fixture: ComponentFixture<LogregPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogregPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogregPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
