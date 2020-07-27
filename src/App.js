import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {CardList}  from './components/card-list/card-list.component.jsx';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: []
    };
  }
//using axios
  // componentDidMount=()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //    .then(response => {
  //     let monsters = response.data.map(monster=> ({...monster}))
  //     this.setState({monsters:monsters}); 
  //      console.log(this.state.monsters) ; 
  //      });
  //    }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>  response.json())
    //.then(users=>     console.log(users));
    .then(users=>     this.setState({monsters:users}));
  }
  
  render() {  
  return (
     <div className='App'>
      <CardList monsters={this.state.monsters}/>
    </div>
  );
}
}
export default App;
