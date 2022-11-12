import { Component  } from 'react';
import { Button } from '@mui/material';

class Battle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hp: props.hp
        }
    }

    onStartBattle = () => {
        const oldHP = this.state.hp;
        if (oldHP <= 0) {
            alert("Герой тяжело ранен, восстановите здоровье");
            return
        } 
        
        this.setState({
            hp: oldHP - 1
        })
        this.props.onUpdateValue(oldHP - 1)
    }

    render() {
        return (
            <Button variant="contained" onClick={this.onStartBattle} >Вступить в бой</Button>
        )
    }
}

export default Battle;