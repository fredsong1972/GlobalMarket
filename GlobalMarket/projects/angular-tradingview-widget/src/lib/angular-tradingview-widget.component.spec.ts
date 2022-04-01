import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTradingviewWidgetComponent } from './angular-tradingview-widget.component';

describe('AngularTradingviewWidgetComponent', () => {
  let component: AngularTradingviewWidgetComponent;
  let fixture: ComponentFixture<AngularTradingviewWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularTradingviewWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTradingviewWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
