import { Component } from 'react';

import './App.scss';
import Profile from '../profile/profile';
import Features from '../features/features';
import Skills from '../skills/skills'
import Battle from '../battle/battle';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Denis',
      features: {
        strength: 3,
        dexterity: 4,
        intelligence: 2,
        charisma: 5,
      }
    }
  }

  calcHP = (hp) => {
    this.setState({hp})
  }

  onChangeName = (name) => {
    this.setState({name});
  }

  onUpdateValueFeatures = (name, value) => {
    this.setState(({features}) => {
      return {features: {...features, [name]: value}}
    })
  }

  render() {
    return (
      <div className="App">
        <Profile name={this.state.name} onChangeName={this.onChangeName}/>
        <Features features={this.state.features} onUpdateValue={this.onUpdateValueFeatures}/>
        <Skills />
        <Battle />
      </div>
    )
  };
}

export default App;
