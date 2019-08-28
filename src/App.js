import React, { Component } from 'react';
import { CardList } from './component/cardList/index.jsx'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monsterList: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsterList: users }))
  }
  render() {
    const { monsterList, searchField } = this.state
    const filterMonsters = monsterList.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
        <input 
          type='search' 
          placeholder='search monster'
          onChange={e => this.setState({ searchField: e.target.value })}/>
        <CardList monsterList={filterMonsters}/>
      </div>
    )
  }
}

export default App;
