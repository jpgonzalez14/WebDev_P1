import React, {Component} from "react";
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
    alert('Json: ' + this.state.value);
    //var obj = JSON.parse(this.state.value);
    event.preventDefault();
    this.setState({ submitted: true });
  }
  renderChart(){
    console.log(this.state.submitted);
    console.log(this.state.value);
    return  <BarChart value={this.state.value}/>
  }

  render() {
    return (
      <div className="container">
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label>
          Enter Json:
        </label>
        <textarea className="form-control" rows="5" type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit"/>
        </div>
      </form>
      {this.state.submitted && this.renderChart()}
      </div>
    );
  }
}

export default Input;
