import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptiontoolComponent } from './encryptiontool.component';

describe('EncryptiontoolComponent', () => {
  let component: EncryptiontoolComponent;
  let fixture: ComponentFixture<EncryptiontoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncryptiontoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptiontoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
