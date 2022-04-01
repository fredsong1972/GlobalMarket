import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ITradingViewWidget, Themes } from 'angular-tradingview-widget'
import { Quote } from './app.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Global Market';

  widgetConfig: ITradingViewWidget = {
    symbol: 'MSFT',
    widgetType: 'widget',
    allow_symbol_change: true,
    height: 540,
    width: 980,
    hideideas: true,
    hide_legend: false,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    theme: Themes.LIGHT,
  };

  symbols = ['MSFT',
    'AAPL',
    'AMZN',
    'TSLA',
    'BTCUSD',
    'ETHUSD',
    'XAUUSD'
  ];

  public quote?: Quote;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Quote>(`/finance/quote?symbol=${this.widgetConfig.symbol}`).subscribe(result => {
      this.quote = result;
    }, error => console.error(error));
  }

  onSymbolChange(event: any) {
    this.widgetConfig = {
      symbol: event,
      widgetType: 'widget',
      allow_symbol_change: true,
      height: 560,
      width: 980,
      hideideas: true,
      hide_legend: false,
      hide_side_toolbar: true,
      hide_top_toolbar: false,
      theme: Themes.LIGHT,
    };
    this.ngOnInit();
  }
}
