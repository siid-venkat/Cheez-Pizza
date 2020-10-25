import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmainContentComponent } from './submain-content.component';

describe('SubmainContentComponent', () => {
  let component: SubmainContentComponent;
  let fixture: ComponentFixture<SubmainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
