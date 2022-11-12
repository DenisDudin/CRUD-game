import { Component } from 'react'

class Features extends Component {

    constructor(props) {
        super(props);
        const { strength, dexterity, intelligence, charisma, hp} = props.features
        this.state = {
            strength: strength.value,
            dexterity: dexterity.value,
            intelligence: intelligence.value,
            charisma: charisma.value,
            hp: hp,
        }
    }

    onUpdateValueFeatures = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: +e.target.value
        })

        this.props.onUpdateValue(name, +e.target.value);
    }


    render() {
        return (
            <div className="features">
                <div className="features-list">
                    <h3 className="features-name">Характеристики персонажа:</h3>
                    <div className="features-item">
                        <span className="features-item__name">Сила:</span>
                        <input type="text" className="features-item__value" 
                        name="strength"
                        defaultValue={this.state.strength}
                        onChange={this.onUpdateValueFeatures} />
                    </div>
    
                    <div className="features-item">
                        <span className="features-item__name">Ловкость:</span>
                        <input type="text" className="features-item__value" 
                        name="dexterity"
                        defaultValue={this.state.dexterity}
                        onChange={this.onUpdateValueFeatures} />
                    </div>
    
                    <div className="features-item">
                        <span className="features-item__name">Интеллект:</span>
                        <input type="text" className="features-item__value" 
                        name="intelligence"
                        defaultValue={this.state.intelligence}
                        onChange={this.onUpdateValueFeatures} />
                    </div>
    
                    <div className="features-item">
                        <span className="features-item__name">Харизма:</span>
                        <input type="text" className="features-item__value" 
                        name="charisma"
                        defaultValue={this.state.charisma}
                        onChange={this.onUpdateValueFeatures} />
                    </div>
    
                    <div className="features-item features-item__additional">
                        <p className="features-item__name">Жизненная сила: {+this.props.features.hp}</p>
                    </div>
    
                    <div className="features-item features-item__additional">
                        <p className="features-item__name">Уклонение: {+this.state.intelligence + 10}</p>
                    </div>
    
                    <div className="features-item features-item__additional">
                        <p className="features-item__name">Энергичность: {+this.state.intelligence + this.state.dexterity}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Features;