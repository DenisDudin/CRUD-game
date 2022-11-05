import { Avatar } from '@mui/material';
import { Component } from 'react';

import './profile.scss';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }

    

    onChangeName = (e) => {
        const name = e.target.value;
        
        this.setState({name});
        this.props.onChangeName(name);
        
    }

    render() {
        return (
            <div className="profile">
                <Avatar
                    alt={this.name}
                    src='../../img/profile.jpg'
                    sx={{ width: 56, height: 56 }}
                    className="profile__avatar"
                />
                <input type="text" className="profile__name" defaultValue={this.state.name} onChange={this.onChangeName}/>
            </div>
        )
    }
}

export default Profile;