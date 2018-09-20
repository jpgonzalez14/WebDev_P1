import React, { Component } from 'react';
import './App.css';
import Input from './Input';
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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">WebDev Parcial</h1>
        </header>
        <br/>
        <br/>
        <Input/>


      </div>
    );
  }
}

/*<div>
  {this.renderMunicipios()}
</div>
<BarChart/>
<div id="vis"></div>*/

export default App;
