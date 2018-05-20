import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelcitationComponent } from './painelcitation.component';

describe('PainelcitationComponent', () => {
  let component: PainelcitationComponent;
  let fixture: ComponentFixture<PainelcitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelcitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelcitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
