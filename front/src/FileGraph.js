import React, {Component} from "react";
import vegaEmbed from 'vega-embed';

class FileGraph extends Component {

	render() {
    var spec = {
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
    }
		/*var myData = [
  {"a": "A","b": 28}, {"a": "B","b": 55}, {"a": "C","b": 43},
  {"a": "D","b": 91}, {"a": "E","b": 81}, {"a": "F","b": 53},
  {"a": "G","b": 19}, {"a": "H","b": 87}, {"a": "I","b": 52}
];*/
    var myData = this.props.datag;
		console.log('datos datag'+ myData);
		console.log(this.props.datag);

    const embed_opt = {"mode": "vega-lite"};
    const el = document.getElementById('file');
    const view = vegaEmbed("#file", spec, embed_opt)
					.catch(error => console.log(el, error))
    			.then((res) =>  res.view.insert("myData", myData).run());

		return(
			<div></div>
			)
	}

}
export default FileGraph;
