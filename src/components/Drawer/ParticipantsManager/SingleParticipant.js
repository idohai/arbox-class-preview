import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar'

import Icon from '../../../assests/Icons/ParticipantsIcon'
const SingleParticipant = (props) => {

    return (
        <Grid container spacing={3}>
            <Grid item>
                <Avatar src={props.image} alt={`${props.fullname}`}/>
            </Grid>
            <Grid item>
                <Typography variant="h6">{props.fullname}</Typography>
            </Grid>
        </Grid>
    );
}

export default SingleParticipant;