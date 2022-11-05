import { Avatar, TextField } from '@mui/material';




const Profile = () => {

    return (
        <div className="profile-container">
            <Avatar
                alt="Nameless"
                src='../../img/profile.jpg'
                sx={{ width: 56, height: 56 }}
            />
            <TextField id="standard-basic" label="Имя персонажа" variant="standard" />
        </div>
    )
}

export default Profile;