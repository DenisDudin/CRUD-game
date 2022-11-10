import { Component } from 'react';
import { Rating } from '@mui/material';

class Skills extends Component {

    constructor(props) {
        super(props);
        this.state = {
            attack: props.skills.attack ,
            stealth: props.skills.stealth ,
            shooting: props.skills.shooting ,
            trainability: props.skills.trainability ,
            survival: props.skills.survival ,
            medicine: props.skills.medicine ,
            intimidation: props.skills.intimidation ,
            insight: props.skills.insight,
            appearance: props.skills.appearance ,
            manipulation: props.skills.manipulation
        }
    }

    onUpdateValueSkills = (e) => {
        const name = e.target.name;

        if (this.state[name] === +e.target.value) {
            this.setState({
                [name]: 0
            })
        } else {
            this.setState({
                [name]: +e.target.value
            })
        }   
        
        this.props.onUpdateValue([name], +e.target.value);
    }

    render() {
        console.log(this.state.attack.defaultValue);
        return (
            <div className="skills">
                <div className="skills-list">
                    <h3 className="skills-name">Скилы:</h3>
                
                    <div className="skills-item">
                        <span className="skills-item__name">Атака</span>
                        <Rating name="attack" 
                        value={this.state.attack} 
                        onChange={this.onUpdateValueSkills} />
                    </div>
    
                    <div className="skills-item">
                        <span className="skills-item__name">Стелс</span>
                        <Rating name="stealth" 
                        value={this.state.stealth}
                        onChange={this.onUpdateValueSkills} />
                    </div>
    
                    <div className="skills-item">
                        <span className="skills-item__name">Стрельба из лука</span>
                        <Rating name="shooting" 
                        value={this.state.shooting}
                        onChange={this.onUpdateValueSkills} />
                    </div>
    
                    <div className="skills-item">
                        <span className="skills-item__name">Обучаемость</span>
                        <Rating name="trainability" 
                        value={this.state.trainability}
                        onChange={this.onUpdateValueSkills} />
                    </div>
    
                    <div className="skills-item">
                        <span className="skills-item__name">Выживание</span>
                        <Rating name="survival" 
                        value={this.state.survival}
                        onChange={this.onUpdateValueSkills} />
                    </div>
    
                    <div className="skills-item">
                        <span className="skills-item__name">Медицина</span>
                        <Rating name="medicine" 
                        value={this.state.medicine}
                        onChange={this.onUpdateValueSkills} />
                    </div>
    
                    <div className="skills-item">
                        <span className="skills-item__name">Запугивание</span>
                        <Rating name="intimidation" 
                        value={this.state.intimidation}
                        onChange={this.onUpdateValueSkills} />
                    </div>
    
                    <div className="skills-item">
                        <span className="skills-item__name">Проницательность</span>
                        <Rating name="insight" 
                        value={this.state.insight}
                        onChange={this.onUpdateValueSkills} />
                    </div>
    
                    <div className="skills-item">
                        <span className="skills-item__name">Внешний вид</span>
                        <Rating name="appearance" 
                        value={this.state.appearance}
                        onChange={this.onUpdateValueSkills} />
                    </div>
    
                    <div className="skills-item">
                        <span className="skills-item__name">Манипулирование</span>
                        <Rating name="manipulation" 
                        value={this.state.manipulation}
                        onChange={this.onUpdateValueSkills} />
                    </div>
    
                </div>
            </div>
        )
    }
}

export default Skills;