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
    var myData = this.props.data;
    console.log(myData);
    const embed_opt = {"mode": "vega-lite"};
    const el = document.getElementById('vis');
    const view = vegaEmbed("#file", spec, embed_opt)
    			.then((res) =>  res.view.insert("myData", myData).run());

		return(
			<div></div>
			)
	}

}
export default FileGraph;
