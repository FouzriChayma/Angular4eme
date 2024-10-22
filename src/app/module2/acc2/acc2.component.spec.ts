import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acc2Component } from './acc2.component';

describe('Acc2Component', () => {
  let component: Acc2Component;
  let fixture: ComponentFixture<Acc2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Acc2Component]
    });
    fixture = TestBed.createComponent(Acc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
