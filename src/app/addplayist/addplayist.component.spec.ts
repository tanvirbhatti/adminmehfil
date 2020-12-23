import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplayistComponent } from './addplayist.component';

describe('AddplayistComponent', () => {
  let component: AddplayistComponent;
  let fixture: ComponentFixture<AddplayistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplayistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplayistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
