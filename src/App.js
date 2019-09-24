import React, { Component } from 'react';
import List from './List';
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      films: [],
    }
    this.getFilms = this.getFilms.bind(this);
  }

  getFilms(){
    return axios.get("https://swapi.co/api/films").then((response)=>{
      console.log(response.data.results);
      this.setState({films: response.data.results})
    })
  }
  componentDidMount(){
    this.getFilms()
  }
  render(){
    const {films} = this.state;
  return (
    <div className="App">
     <List films={films}/>
    </div>
  );
  }
}

export default App;
