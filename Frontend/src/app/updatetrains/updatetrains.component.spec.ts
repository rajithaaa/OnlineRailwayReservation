import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetrainsComponent } from './updatetrains.component';

describe('UpdatetrainsComponent', () => {
  let component: UpdatetrainsComponent;
  let fixture: ComponentFixture<UpdatetrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetrainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
