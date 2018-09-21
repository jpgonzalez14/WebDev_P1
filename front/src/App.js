import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Input from './Input';
import Navbar from './Navbar';
import InputSample from './InputSample';

//import Municipio from './Municipio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      municipios: []
    }
  }

  /*componentDidMount(){
    fetch('http://localhost:3001/')
      .then((res) => res.json())
      .then((getmunicipios) => {
        console.log(getmunicipios);
        this.setState({ municipios: getmunicipios })
      })
      .catch((err) => console.log(err));
  }*/

  /*renderMunicipios(){
    return this.state.municipios.map((muni) =>
      <Municipio key={muni._id} municipio={muni}/>
    );
  }*/
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <br/>
          <br/>
          <Route exact path="/" component={Input} />
          <Route exact path="/samples" component={InputSample} />

        </div>
      </Router>

    );
  }
}

/*<div>
  {this.renderMunicipios()}
</div>
<BarChart/>
<div id="vis"></div>*/

export default App;
