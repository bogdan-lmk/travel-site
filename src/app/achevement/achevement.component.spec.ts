import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchevementComponent } from './achevement.component';

describe('AchevementComponent', () => {
  let component: AchevementComponent;
  let fixture: ComponentFixture<AchevementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchevementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchevementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
