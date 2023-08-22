import { Component } from '@angular/core';
import { dataPlotly } from './chart/trace';
import { layout } from './chart/layout';
import { config } from './chart/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'plotly';

  public graph = {
    data: dataPlotly,
    layout: layout,
    config: config
  }

}
