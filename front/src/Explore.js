import React from 'react';
//import axios from 'axios';

class Explore extends React.Component {
  componentDidMount() {
    this.mounted = true;

    fetch('http://localhost:3001/')
      .then(res => res.json())
      .then(json => {
        let datos = json.estadisticas;
        let edades_label = ['Niños', 'Adolescentes', 'Adultos', 'Viejos'];
        let edades_datos = [datos.edad.ninos];
        if(this.mounted) {
        this.setState({});
  }
  componentWillUnmount(){
    this.mounted = false;
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Explore;
