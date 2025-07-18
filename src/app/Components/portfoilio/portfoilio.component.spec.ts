import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoilioComponent } from './portfoilio.component';

describe('PortfoilioComponent', () => {
  let component: PortfoilioComponent;
  let fixture: ComponentFixture<PortfoilioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfoilioComponent]
    });
    fixture = TestBed.createComponent(PortfoilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
