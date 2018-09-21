import React from "react";
import InputGraph from './InputGraph';
import FileGraph from './FileGraph';
import Papa from 'papaparse';

class Input extends React.Component {
  prueba: any = null;
  constructor(props) {
    super(props);
    this.state = {value: '',
    file:'',
    name:'kyota',
    title:'prueba',
    datag:'',
    valueg:'',
    submitted: false,
    filesubmitted: false};


    this.updateData = this.updateData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    //this.setState({name: event.target.name});
    //this.setState({title: event.target.title});
  }
  handleChange1(event) {
    //this.setState({value: event.target.value});
    this.setState({name: event.target.name});
    //this.setState({title: event.target.title});
  }
  handleChange2(event) {
    //this.setState({value: event.target.value});
    //this.setState({name: event.target.name});
    this.setState({title: event.target.title});
  }

  updateData(result) {
    var data = result;
    alert('upload CSV file');
    this.setState({ filesubmitted: true });
    this.setState({datag: data});

  }

  handleChangeFile(event)
  {
      var datosString='';
      let file = event.target.files[0];

      Papa.parse(file, {
          header: true,
      		download: true,
      		complete: (results) => {
              this.updateData(results.data);
          	}
      		});
  }

  renderChartFile(){
    return  <FileGraph datag={this.state}/>
  }

  handleSubmit(event) {
    if(this.state.value !== ''){
      var obj;
      event.preventDefault();
      try {
        obj = JSON.parse(this.state.value);
      } catch(e) {
          alert('your JSON is incomplete or has some errors'); // error in the above string (in this case, yes)!
      }
      this.setState({ valueg: obj });
      this.setState({ submitted: true });
    } else {
      alert('input is empty JSON');
    }
  }

  handleCreate(event){

    if (this.state.name === '' || this.state.title === '') {
      alert('You have to write you Nickname and a title for the graph');
    } else {
      event.preventDefault();
console.log(this.state);
      fetch('http://localhost:3001/create', {
       method: 'post',
       body: {
         "name": this.state.name,
         "title": this.state.title,
         "data": this.state.datag,
         "spec": this.state.valueg
       }
      }).then(res => console.log(res));;
    }


 };
  /*renderChart(){
    return  <InputGraph value={this.state.value}/>
  }*/

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
            <label>
              <h1>Insert you CSV file:</h1>
            </label>
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="customFile" value={this.state.file} onChange={ this.handleChangeFile }/>
              <label className="custom-file-label" htmlFor="customFile">Choose file</label>
              <br/>
            </div>
              <label>
              <br/>
                <h1>You can write your graph spec here:</h1>
              </label>
              <textarea className="form-control" rows="20" type="text" value={this.state.value} onChange={this.handleChange} />
              <br/>
              <input className="btn btn-primary btn-lg" type="submit" value="submit"/>
              </div>
            </form>
          </div>
            <div className="col-7">
            <form onSubmit={this.handleCreate}>
            <label>
              <h1>Save graph</h1>
            </label>
            <div className="form-row">
              <div className="col">
                <input type="text" className="form-control" placeholder="Nickname" value={this.state.name} onChange={this.handleChange1}/>
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Title" value={this.state.title} onChange={this.handleChange2}/>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-warning">Save</button>
              </div>
            </div>
          </form>
          <br/>
            <h1>Your graph will appear here!</h1>
              {this.state.submitted && this.state.filesubmitted && this.renderChartFile()}
              <div id="file"></div>
            </div>
        </div>
      </div>
    );
  }
}


export default Input;
