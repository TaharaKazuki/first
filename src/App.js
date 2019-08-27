import React, { Component } from 'react';
import { CardList } from './component/cardList/index.jsx'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monsterList: [
        {
          id: 1,
          name: 'hogehoge',
        },
        {
          id: 2,
          name: 'hugahuga',
        },
        {
          id: 3,
          name: 'fugafuga',
        }
      ]
    }
  }
  componentWillMount() {
    
  }
  render() {
    return (
      <div className="App">
        <CardList monsterList={this.state.monsterList}/>
      </div>
    )
  }
}

export default App;
