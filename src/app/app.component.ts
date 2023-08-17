import { Component } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'plotly';
  trace1 = {
    x: data.data1.x,
    y: data.data1.y,
    mode: 'lines',
    line: {
      width: 0.6,
      color: 'yellow',
      shape: 'vh',
    }
  };
  trace2 = {
    x: data.data2.x,
    y: data.data2.y,
    mode: 'lines',
    line: {
      width: 0.6,
      color: '#ff6600',
      shape: 'vh'
    },
  };
  trace3 = {
    x: data.data3.x,
    y: data.data3.y,
    mode: 'lines',
    yaxis: 'y2',
    line: {
      width: 0.6,
      color: 'red',
      shape: 'vh'
    }
  };
  // trace3 = {
  //   x: data.data3.x,
  //   y: data.data3.y,
  //   mode: 'lines+markers',
  //   yaxis: 'y2',
  //   line: {
  //     width: 0.6,
  //     color: 'red',
  //     shape: 'vh'
  //   },
  //   marker: {
  //     color: 'red'
  //   }
  // };
  trace4 = {
    x: data.data4.x,
    y: data.data4.y,
    yaxis: 'y2',
    mode: 'lines',
    line: {
      width: 0.6,
      color: 'violet',
      shape: 'vh'
    }
  };
  trace5 = {
    x: data.data5.x,
    y: data.data5.y,
    yaxis: 'y2',
    mode: 'lines',
    line: {
      width: 0.6,
      color: '#0dffff',
      shape: 'vh'
    }
  };
  trace6 = {
    x: data.data6.x,
    y: data.data6.y,
    yaxis: 'y2',
    mode: 'lines',
    line: {
      width: 0.6,
      color: '#9900cc',
      shape: 'vh'
    }
  };
  trace7 = {
    x: data.data7.x,
    y: data.data7.y,
    yaxis: 'y2',
    mode: 'lines',
    line: {
      width: 0.6,
      color: '#3366ff',
      shape: 'vh'
    }
  };

  layout = {
    title: 'plotly chart',
    plot_bgcolor: '#111d27',
    paper_bgcolor: "#262626",
    font: {
      color: '#a6a6a6'
    },

    xaxis: {
      domain: [0.1, 1],
      showgrid: false,
      ticklen: 10,
      dtick: 5,
      minor: {
        ticklen: 5,
      },
      tickwidth: 1.5,
      color: '#a6a6a6',
      position: 0.035,
    },

    yaxis: {
      domain: [0.1, 1],
      range: [0, 30],
      side: 'left',
      position: 0.07,
      zeroline: false,
      showgrid: false,
      tickangle: -90,
      tickvals: Array.from({ length: 31 }, (_, index) => index),
      ticktext: Array.from({ length: 31 }, (_, index) => {
        if (index === 0 || index === 30) {
          return index
        } else {
          return ''
        }
      }),
      ticklen: 10,
      minor: {
        ticklen: 5,
        nticks: 15,
      },
      tick0: 0,
      dtick: 1,
      tickwidth: 0.6,
      color: 'a6a6a6',
    },
    
    yaxis2: {
      domain: [0.1, 1],
      range: [0, 5],
      showgrid: false,
      overlaying: 'y',
      side: 'left',
      position: 0.03,
      tickwidth: 0.6,
      tickangle: -90,
      zeroline: false,
      color: 'a6a6a6',
      tickmode: 'array',
      tickvals: Array.from({ length: 26 }, (_, index) => index * 0.2),
      ticktext: Array.from({ length: 26 }, (_, index) => {
        if (index === 0 || index === 25) {
          return index * 0.2;
        } else {
          return '';
        }
      }),
      ticklen: 10,
      minor: {
        ticklen: 5,
        nticks: 12,
      },
    },

    shapes: [
      {
        //shape trace 1
        type: 'rect',
        xref: 'paper',
        yref: 'y',
        x0: 0.052,
        x1: 0.059,
        y0: 2,
        y1: 3.2,
        fillcolor: 'yellow',
        line: {
          width: 0,
        },
      },
      //shape trace 2
      {
        type: 'rect',
        xref: 'paper',
        yref: 'y',
        x0: 0.052,
        x1: 0.059,
        y0: 4.2,
        y1: 5.4,
        fillcolor: '#ff6600',
        line: {
          width: 0
        },
      },
      //shape trace 3
      {
        type: 'rect',
        xref: 'paper',
        yref: 'y2',
        x0: 0.012,
        x1: 0.019,
        y0: 0.3,
        y1: 0.5,
        fillcolor: 'red',
        line: {
          width: 0,
        },
      },
      //shape trace 4
      {
        type: 'rect',
        xref: 'paper',
        yref: 'y2',
        x0: 0.012,
        x1: 0.019,
        y0: 0.7,
        y1: 0.9,
        fillcolor: 'violet',
        line: {
          width: 0,
        },
      },
      //shape trace 5
      {
        type: 'rect',
        xref: 'paper',
        yref: 'y2',
        x0: 0.012,
        x1: 0.019,
        y0: 1.12,
        y1: 1.32,
        fillcolor: '#0dffff',
        line: {
          width: 0,
        },
      },
      //shape trace 6
      {
        type: 'rect',
        xref: 'paper',
        yref: 'y2',
        x0: 0.012,
        x1: 0.019,
        y0: 1.52,
        y1: 1.72,
        fillcolor: '#9900cc',
        line: {
          width: 0,
        },
      },
      //shape trace 7
      {
        type: 'rect',
        xref: 'paper',
        yref: 'y2',
        x0: 0.012,
        x1: 0.019,
        y0: 1.92,
        y1: 2.12,
        fillcolor: '#3366ff',
        line: {
          width: 0,
        },
      },
      //
      {
        type: 'path',
        path: 'M 0.18,0.05 L0.176,0.07 L0.18,0.09 L0.184,0.07 Z',
        fillcolor: 'white',
        line: {
          width: 0
        },
        xref: 'paper',
        yref: 'paper',
      },
      {
        type: 'path',
        path: 'M 0.94,0.05 L0.936,0.07 L0.94,0.09 L0.944,0.07 Z',
        fillcolor: 'white',
        line: {
          width: 0
        },
        xref: 'paper',
        yref: 'paper',
      },
      {
        type: 'path',
        path: 'M 0.99,0.05 L0.986,0.07 L0.99,0.09 L0.994,0.07 Z',
        fillcolor: 'white',
        line: {
          width: 0
        },
        xref: 'paper',
        yref: 'paper',
      }
    ],

    annotations: [
      {
        x: '22:13:16',
        y: 0.05,
        xref: 'x',
        yref: 'paper',
        showarrow: false,
        text: '  7  ',
        align: 'center',
        bordercolor: 'white',
        bgcolor: 'white',
        font: {
          size: 7,
          color: 'black'
        }
      },
      {
        x: '02:10:37',
        y: 0.05,
        xref: 'x',
        yref: 'paper',
        showarrow: false,
        text: '  2  ',
        align: 'center',
        bordercolor: 'white',
        bgcolor: 'white',
        font: {
          size: 7,
          color: 'black'
        },
      },
      {
        x: '03:10:44',
        y: 0.05,
        xref: 'x',
        yref: 'paper',
        showarrow: false,
        text: '  2  ',
        align: 'center',
        bordercolor: 'white',
        bgcolor: 'white',
        font: {
          size: 7,
          color: 'black'
        },
      },
      {
        x: '04:55:50',
        y: 0.05,
        xref: 'x',
        yref: 'paper',
        showarrow: false,
        text: '  2  ',
        align: 'center',
        bordercolor: 'white',
        bgcolor: 'white',
        font: {
          size: 7,
          color: 'black'
        },
      },
    ]
  }
  config = {
    scrollZoom: true,
    responsive: true
  }
  public graph = {
    data: [this.trace1, this.trace2, this.trace3, this.trace4, this.trace5, this.trace6, this.trace7],
    layout: this.layout,
    config: this.config,
  }

  initialColors: string[] = [
    this.trace1.line.color,
    this.trace2.line.color,
    this.trace3.line.color,
    this.trace4.line.color,
    this.trace5.line.color,
    this.trace6.line.color,
    this.trace7.line.color,
  ]
  //event
  onClick(event: any){
    //console.log('click');
    if (event.points) {
      for (let i = 0; i < event.points.length; i++) {
        const point = event.points[i];
        if (point.curveNumber === 1) {
          //point.data.line.color = 'green';
          const initialColor = this.initialColors[1];
          if(point.data.line.color === 'green'){
            point.data.line.color = initialColor;
          } else{
            point.data.line.color = 'green';
          }
        }
      }
    }
  }

  // onHover(event: any){
  //   if (event.points) {
  //     var pointIndex = '', tn = '', colors: any = [];
  //     for (let i = 0; i < event.points.length; i++) {
  //       const point = event.points[i];
  //       if (point.curveNumber === 2) {

  //         const pointIndex = point.pointNumber;
  //         const tn = point.curveNumber;

  //         //if (pointIndex >= 0 && pointIndex < this.trace3.x.length) {
  //           //this.trace3.marker.color = 'pink';
  //           colors = event.points[i].trace3.marker.color;
  //         //}
  //         colors[pointIndex] = 'pink'
  //       }
  //     }
  //   }

  //   if(event.points){
  //     for(let i = 0; i < event.points.length; i++){
  //       var pn = '', tn = '', color = [];
  //       pn = event.points[i].pointNumber;
  //       tn = event.points[i].curveNumber;

  //     }
  //   }
  // }

}
