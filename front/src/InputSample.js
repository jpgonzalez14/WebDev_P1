import React, { Component } from 'react';

class InputSample extends Component {

  render() {
    var parse = {
      "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
      "description": "A simple bar chart with embedded data.",
      "data": {
        "name": "myData"
      },
      "mark": "bar",
      "encoding": {
        "y": {"field": "a", "type": "ordinal"},
        "x": {"field": "b", "type": "quantitative"}
      }
    };
    var myJSON = JSON.stringify(parse);
    return (
      <div className="container">
        <p>
        {myJSON}
        </p>
        <a href="sample.csv" download>
          <button type="submit" className="btn btn-primary btn-lg">Download Data</button>
        </a>
      </div>
    );
  }
}


export default InputSample;
