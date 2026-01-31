import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOOTERRComponent } from './footerr.component';

describe('FOOTERRComponent', () => {
  let component: FOOTERRComponent;
  let fixture: ComponentFixture<FOOTERRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FOOTERRComponent]
    });
    fixture = TestBed.createComponent(FOOTERRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
