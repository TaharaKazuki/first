import React, { Component } from 'react';
import { CardList } from './component/cardList/index.jsx'
import { SearchField } from './component/searchField/index.jsx'

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
  handlerSearch = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsterList, searchField } = this.state
    const filterMonsters = monsterList.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
        <SearchField onChange={this.handlerSearch}/>
        <CardList monsterList={filterMonsters}/>
      </div>
    )
  }
}

export default App;
