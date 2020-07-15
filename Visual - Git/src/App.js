import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  Crosshair,
  MarkSeries,
  Hint
} from 'react-vis';

const CHART_MARGINS = {left: 50, right: 10, top: 10, bottom: 25};
const DATA2 = [
  
  
    {
      "FIELD1": 0,
      x: 1877,
      y: 68.7,
      "Alimentos": 65.1,
      "Otros": 104.3
    },
    {
      "FIELD1": 1,
      x: 1886,
      y: 77.9,
      "Alimentos": 75.4,
      "Otros": 102.6
    },
    {
      "FIELD1": 2,
      x: 1887,
      y: 68.8,
      "Alimentos": 65.2,
      "Otros": 103.5
    },
    {
      "FIELD1": 3,
      x: 1888,
      y: 81,
      "Alimentos": 78.8,
      "Otros": 101.4
    },
    {
      "FIELD1": 4,
      x: 1889,
      y: 87.5,
      "Alimentos": 85.6,
      "Otros": 106.2
    },
    {
      "FIELD1": 5,
      x: 1890,
      y: 85.3,
      "Alimentos": 83.3,
      "Otros": 104.3
    },
    {
      "FIELD1": 6,
      x: 1891,
      y: 84.8,
      "Alimentos": 83.2,
      "Otros": 100.9
    },
    {
      "FIELD1": 7,
      x: 1892,
      y: 97.7,
      "Alimentos": 97.4,
      "Otros": 100.8
    },
    {
      "FIELD1": 8,
      x: 1893,
      y: 105.7,
      "Alimentos": 105.9,
      "Otros": 103.1
    },
    {
      "FIELD1": 9,
      x: 1894,
      y: 93.2,
      "Alimentos": 92.5,
      "Otros": 99.9
    },
    {
      "FIELD1": 10,
      x: 1895,
      y: 93.1,
      "Alimentos": 92,
      "Otros": 103.2
    },
    {
      "FIELD1": 11,
      x: 1896,
      y: 102.2,
      "Alimentos": 102.2,
      "Otros": 101.4
    },
    {
      "FIELD1": 12,
      x: 1897,
      y: 102.8,
      "Alimentos": 102.7,
      "Otros": 103.9
    },
    {
      "FIELD1": 13,
      x: 1898,
      y: 88.5,
      "Alimentos": 87.5,
      "Otros": 98.2
    },
    {
      "FIELD1": 14,
      x: 1899,
      y: 85.5,
      "Alimentos": 84.7,
      "Otros": 93
    },
    {
      "FIELD1": 15,
      x: 1900,
      y: 100,
      "Alimentos": 100,
      "Otros": 100
    },
    {
      "FIELD1": 16,
      x: 1901,
      y: 122.8,
      "Alimentos": 124.4,
      "Otros": 106.7
    },
    {
      "FIELD1": 17,
      x: 1902,
      y: 120.8,
      "Alimentos": 122.1,
      "Otros": 108.5
    },
    {
      "FIELD1": 18,
      x: 1903,
      y: 125.7,
      "Alimentos": 125.4,
      "Otros": 128.8
    },
    {
      "FIELD1": 19,
      x: 1904,
      y: 106.8,
      "Alimentos": 103.9,
      "Otros": 135
    },
    {
      "FIELD1": 20,
      x: 1905,
      y: 121.3,
      "Alimentos": 121.9,
      "Otros": 115.1
    },
    {
      "FIELD1": 21,
      x: 1906,
      y: 135.9,
      "Alimentos": 137.4,
      "Otros": 122
    },
    {
      "FIELD1": 22,
      x: 1907,
      y: 133.9,
      "Alimentos": 135,
      "Otros": 122.9
    },
    {
      "FIELD1": 23,
      x: 1908,
      y: 131.9,
      "Alimentos": 133.2,
      "Otros": 119.3
    },
    {
      "FIELD1": 24,
      x: 1909,
      y: 143.6,
      "Alimentos": 145.4,
      "Otros": 126.6
    },
    {
      "FIELD1": 25,
      x: 1910,
      y: 165.7,
      "Alimentos": 168.5,
      "Otros": 138.8
    },
    {
      "FIELD1": 26,
      x: 1911,
      y: 163.5,
      "Alimentos": 166.8,
      "Otros": 131.6
    },
    {
      "FIELD1": 27,
      x: 1939,
      y: 343.2,
      "Alimentos": 350.4,
      "Otros": 273.6
    }
   
];
const YMAX = 15;


class App extends Component {

  _rememberValue = value => {
    this.setState({value});
  };

  constructor(props) {
    super(props);
    this.state = {
      crosshairValues: []
    };
    
  }
  
  render() {
    const {value} = this.state;
    return (
      <div className="App">
        <XYPlot width={600} height={300} margin={CHART_MARGINS}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="Precios_indice_general_precios_mayoreo_ciudad_mexico 1877-1939" />
        <YAxis title="General"/>
        <MarkSeries onNearestX={this._rememberValue} data={DATA2} />
        {value ? (
          <LineSeries
            data={[{x: value.x, y: value.y}, {x: value.x, y: YMAX}]}
            stroke="black"
          />
        ) : null}
        {value ? (
          <Hint
            value={value}
            align={{horizontal: Hint.ALIGN.AUTO, vertical: Hint.ALIGN.TOP_EDGE}}
          >
            <div className="rv-hint__content">{`(${value.x}, ${value.y})`}</div>
          </Hint>
        ) : null}
      </XYPlot>

      </div>
    );
  }
}

export default App;