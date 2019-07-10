import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarringComponent } from './starring.component';

describe('StarringComponent', () => {
  let component: StarringComponent;
  let fixture: ComponentFixture<StarringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarringComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
