import React, {Component} from "react";
import vegaEmbed from 'vega-embed';

class FileGraph extends Component {

	render() {

		var myData = this.props.datag.datag;
		var spec = this.props.datag.valueg;
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
