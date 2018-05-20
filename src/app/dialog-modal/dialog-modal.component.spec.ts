import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoModalComponent } from './dialo-modal.component';

describe('DialoModalComponent', () => {
  let component: DialoModalComponent;
  let fixture: ComponentFixture<DialoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
