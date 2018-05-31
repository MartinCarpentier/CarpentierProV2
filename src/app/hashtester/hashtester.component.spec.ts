import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtesterComponent } from './hashtester.component';

describe('HashtesterComponent', () => {
  let component: HashtesterComponent;
  let fixture: ComponentFixture<HashtesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashtesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
