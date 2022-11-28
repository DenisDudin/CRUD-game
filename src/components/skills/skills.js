import { Component } from "react";
import { Rating } from "@mui/material";

class Skills extends Component {
  constructor(props) {
    super(props);
    const { strength, dexterity, intelligence, charisma } = props.skills;
    this.state = {
      strength: strength.value,
      dexterity: dexterity.value,
      intelligence: intelligence.value,
      charisma: charisma.value,
      attack: strength.skills.attack,
      stealth: dexterity.skills.stealth,
      shooting: dexterity.skills.shooting,
      trainability: intelligence.skills.trainability,
      survival: intelligence.skills.survival,
      medicine: intelligence.skills.medicine,
      intimidation: charisma.skills.intimidation,
      insight: charisma.skills.insight,
      appearance: charisma.skills.appearance,
      manipulation: charisma.skills.manipulation,
    };
  }

  onUpdateValueSkills = (e) => {
    const name = e.target.name;
    const feature = e.target.parentNode.getAttribute('data-feature');

    console.log(feature);

    if (this.state[name] === +e.target.value) {
      this.setState({
        [name]: 0,
      });

      this.props.onUpdateValue([name], 0);
    } else if (this.state[feature] < +e.target.value) {
      alert(`Не хватает ${feature}`);
    } else {
      this.setState({
        [name]: +e.target.value,
      });

      this.props.onUpdateValue([name], +e.target.value);
    }
  };

  render() {
    return (
      <div className="skills">
        <div className="skills-list">
          <h3 className="skills-name">Скилы:</h3>

          <div className="skills-item">
            <span className="skills-item__name">Атака</span>
            <Rating
              name="attack"
              data-feature="strength"
              value={this.state.attack}
              onChange={this.onUpdateValueSkills}
            />
          </div>

          <div className="skills-item">
            <span className="skills-item__name">Стелс</span>
            <Rating
              name="stealth"
              data-feature="dexterity"
              value={this.state.stealth}
              onChange={this.onUpdateValueSkills}
            />
          </div>

          <div className="skills-item">
            <span className="skills-item__name">Стрельба из лука</span>
            <Rating
              name="shooting"
              data-feature="dexterity"
              value={this.state.shooting}
              onChange={this.onUpdateValueSkills}
            />
          </div>

          <div className="skills-item">
            <span className="skills-item__name">Обучаемость</span>
            <Rating
              name="trainability"
              data-feature="intelligence"
              value={this.state.trainability}
              onChange={this.onUpdateValueSkills}
            />
          </div>

          <div className="skills-item">
            <span className="skills-item__name">Выживание</span>
            <Rating
              name="survival"
              data-feature="intelligence"
              value={this.state.survival}
              onChange={this.onUpdateValueSkills}
            />
          </div>

          <div className="skills-item">
            <span className="skills-item__name">Медицина</span>
            <Rating
              name="medicine"
              data-feature="intelligence"
              value={this.state.medicine}
              onChange={this.onUpdateValueSkills}
            />
          </div>

          <div className="skills-item">
            <span className="skills-item__name">Запугивание</span>
            <Rating
              name="intimidation"
              data-feature="charisma"
              value={this.state.intimidation}
              onChange={this.onUpdateValueSkills}
            />
          </div>

          <div className="skills-item">
            <span className="skills-item__name">Проницательность</span>
            <Rating
              name="insight"
              data-feature="charisma"
              value={this.state.insight}
              onChange={this.onUpdateValueSkills}
            />
          </div>

          <div className="skills-item">
            <span className="skills-item__name">Внешний вид</span>
            <Rating
              name="appearance"
              data-feature="charisma"
              value={this.state.appearance}
              onChange={this.onUpdateValueSkills}
            />
          </div>

          <div className="skills-item">
            <span className="skills-item__name">Манипулирование</span>
            <Rating
              name="manipulation"
              data-feature="charisma"
              value={this.state.manipulation}
              onChange={this.onUpdateValueSkills}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
