import React, {Component} from "react";
import vegaEmbed from 'vega-embed';

class FileGraphList extends Component {

	render() {

		var myData = this.props.grafica.data;
		var spec = this.props.grafica.value;
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
export default FileGraphList;
