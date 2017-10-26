import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFlyComponent } from './find-fly.component';

describe('FindFlyComponent', () => {
  let component: FindFlyComponent;
  let fixture: ComponentFixture<FindFlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindFlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
