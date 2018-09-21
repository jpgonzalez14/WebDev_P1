import React from "react";
import InputGraph from './InputGraph';
import FileGraph from './FileGraph';
import Papa from 'papaparse';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
    file:'',
  submitted: false,
  filesubmitted: false};

    this.updateData = this.updateData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  updateData(result) {
    const data = result.data;
    console.log(data);

    this.setState({file: data}); 
  }

  handleChangeFile(event)
  {
    event.preventDefault();
      var datosString='';
      let file = event.target.files[0];
      console.log(file);
      Papa.parse(file, {
    		download: true,
    		complete: this.updateData
    		});
  }

  renderChartFile(){
    return  <FileGraph value={this.state.file}/>
  }

  handleSubmit(event) {
    //alert('Json: ' + this.state.value);
    //var obj = JSON.parse(this.state.value);
    if(this.state.value !== ''){
      var obj;
      event.preventDefault();
      try {
        obj = JSON.parse(this.state.value);
      } catch(e) {
          alert(e); // error in the above string (in this case, yes)!
      }
      this.setState({ filesubmitted: true });
      this.setState({ value: obj });
      this.setState({ submitted: true });
    }
  }
  renderChart(){

    return  <InputGraph value={this.state.value}/>
  }
//              <input type="file" value={this.state.value} onChange={this.handleChange} />

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="customFile" value={this.state.file} onChange={ this.handleChangeFile }/>
              <label className="custom-file-label" htmlFor="customFile">Choose file</label>
              <br/>
            </div>
              <label>
                <h1>You can write your json here:</h1>
              </label>
              <textarea className="form-control" rows="20" type="text" value={this.state.value} onChange={this.handleChange} />
              <br/>
              <input className="btn btn-primary btn-lg" type="submit" value="submit"/>
              </div>
            </form>
          </div>
            <div className="col-7">
            <h1>Your graph will appear here!</h1>
              {this.state.submitted && this.renderChart()}
              <div id="input"></div>
              {this.state.filesubmitted && this.renderChartFile()}
              <div id="file"></div>

            </div>
        </div>
      </div>
    );
  }
}

export default Input;
