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
      features: {
        strength: str,
        dexterity: 4,
        intelligence: 2,
        charisma: 5,
        hp: str + 3

      },
      skills: {
        attack: 3,
        stealth: 3,
        shooting: 4,
        trainability: 2,
        survival: 2,
        medicine: 0,
        intimidation: 4,
        insight: 5,
        appearance: 2,
        manipulation: 5,
      },

    }
  }


  onChangeName = (name) => {
    this.setState({name});
  }

  onUpdateValueFeatures = (name, value) => {
    this.setState(({features}) => {
      return {features: {...features, [name]: value}}
    })
  }

  onUpdateValueSkills = (name, value) => {
    this.setState(({skills}) => {
      return {skills: {...skills, [name]: value}}
    })
  }

  onUpdateValueHP = (hp) => {
    this.setState(({features}) => {
      return {features: {...features, hp}}
    })
  }

  render() {
    return (
      <div className="App">
        <Profile name={this.state.name} onChangeName={this.onChangeName}/>
        <Features features={this.state.features} onUpdateValue={this.onUpdateValueFeatures}/>
        <Skills skills={this.state.skills} 
        onUpdateValue={this.onUpdateValueSkills}/>
        <Battle hp={this.state.features.hp} onUpdateValue={this.onUpdateValueHP} />
      </div>
    )
  };
}

export default App;
