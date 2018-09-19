import React, { Component } from 'react';
import './App.css';

import Municipio from './Municipio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      municipios: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/')
      .then((res) => res.json())
      .then((getmunicipios) => {
        console.log(getmunicipios);
        this.setState({ municipios: getmunicipios })
      })
      .catch((err) => console.log(err));
  }

  renderMunicipios(){
    return this.state.municipios.map((muni) =>
      <Municipio municipio={muni}/>
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">WebDev Parcial</h1>
        </header>
        <div>
          {this.renderMunicipios()}
        </div>
      </div>
    );
  }
}

export default App;
