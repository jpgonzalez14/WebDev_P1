import React from "react";
import BarChart from './LineChart';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
  submitted: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //alert('Json: ' + this.state.value);
    //var obj = JSON.parse(this.state.value);
    event.preventDefault();
    this.setState({ submitted: true });
  }
  renderChart(){
    return  <BarChart value={this.state.value}/>
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>
                Enter Json:
              </label>
              <textarea className="form-control" rows="20" type="text" value={this.state.value} onChange={this.handleChange} />
              <input className="btn btn-primary btn-lg" type="submit"/>
              </div>
            </form>
          </div>
            <div className="col-6">
              {this.state.submitted && this.renderChart()}
              <div id="vis"></div>
            </div>
        </div>
      </div>
    );
  }
}

export default Input;
