import React, {Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';

import './App.css';

//function App() {

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))

  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    return (
        <div className='App'>
            
            <h1>Monstero Rolodexo</h1>
            <SearchBox 
              placeholder='serch monstros' 
              handleChange={this.handleChange}
              />
          <div className='cardslist'>
          <CardList 
              monsters={filteredMonsters} 
            />            
            </div>    
             
        </div>
      );

  }
}
export default App;
