import React, {Component} from "react";
import vegaEmbed from 'vega-embed';

class LineChart extends Component {
  
	render() {
    console.log("prueba");
    var config = {
      // default view background color
      // covers the entire view component
      background: "#ffffff",
      axis: {
        labelFont: "serif",
        labelFontSize: 16,
        tickWidth: 3,
        tickColor: "red"
      }
    };
    var obj = JSON.parse(this.props.value);
    vegaEmbed('#vis', obj, { config: config, tooltip: { theme: 'dark' }, defaultStyle: true })
    .then(function (result) {
      console.log(this.props.value);
    }).catch(console.error);

		return(
			<div id="vis"></div>
			)
	}

}
export default LineChart;
