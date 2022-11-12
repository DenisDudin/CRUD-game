import { Component } from 'react';

import './App.scss';
import Profile from '../profile/profile';
import Features from '../features/features';
import Skills from '../skills/skills'
import Battle from '../battle/battle';
import { getPath } from '@mui/system';

class App extends Component {

  constructor(props) {
    super(props);
    const str = 3;
    this.state = {
      name: 'Denis',
      strength: {
        value: str,
        skills: [{attack: 3}]
      },
      dexterity: {
        value: 4,
        skills: [
          {stealth: 3},
          {shooting: 4}
        ]
      },
      intelligence: {
        value: 2,
        skills: [
          {trainability: 2},
          {survival: 2},
          {medicine: 0}
        ]
      },
      charisma: {
        value: 5,
        skills: [
          {intimidation: 4},
          {insight: 5},
          {appearance: 2},
          {manipulation: 5}
        ]
      },
      hp: str + 3,
    }
  }


  onChangeName = (name) => {
    this.setState({name});
  }

  onUpdateValueFeatures = (name, value) => {
    this.setState(() => {
      return {[name]:{...this.state[name], value}}
    })
  }

  onUpdateValueSkills = (name, value) => {
    this.setState(({skills}) => {
      return {skills: {...skills, [name]: value}}
    })
  }

  onUpdateValueHP = (hp) => {
    this.setState({hp})
  }

  render() {
    return (
      <div className="App">
        <Profile name={this.state.name} onChangeName={this.onChangeName}/>
        <Features features={this.state} onUpdateValue={this.onUpdateValueFeatures}/>
        <Skills skills={this.state} 
        onUpdateValue={this.onUpdateValueSkills}/>
        <Battle hp={this.state.hp} onUpdateValue={this.onUpdateValueHP} />
      </div>
    )
  };
}

export default App;
