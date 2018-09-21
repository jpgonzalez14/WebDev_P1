import React from 'react';
//import axios from 'axios';
import FileGraphList from './FileGraphList';


class Explore extends React.Component {

  componentDidMount(){
    this.mounted = true;

    fetch('http://localhost:3001/')
      .then((res) => res.json())
      .then((getgraficas) => {
        console.log(getgraficas);
        this.setState({ graficas: getgraficas })
      })
      .catch((err) => console.log(err));
  }

  renderGraficos(){
    return this.state.graficas.map((grafico) =>
      <FileGraphList key={grafico._id} grafica={grafico}/>
    );
  }
  componentWillUnmount(){
    this.mounted = false;
  }
  constructor(props) {
    super(props);
    this.state = {
      graficas: []
    };
  }

  render() {
    return (
      <div>
        {this.renderGraficos()}
      </div>
    );
  }
}

export default Explore;
