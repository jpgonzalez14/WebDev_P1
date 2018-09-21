import React, {Component} from "react";
import vegaEmbed from 'vega-embed';

class InputGraph extends Component {

	render() {
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
    var data = this.props.value;
    //var dataparse = JSON.stringify(data, null, 2);
    //var obj = JSON.parse(data);
    //console.log(obj);
    vegaEmbed('#input', data, { config: config, tooltip: { theme: 'dark' }, defaultStyle: true })
    .then(function (result) {
      console.log(data);
    }).catch(console.error);

		return(
			<div></div>
			)
	}

}
export default InputGraph;
