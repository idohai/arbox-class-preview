import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar'


const SingleParticipant = (props) => {
    return (
        <Grid container spacing={3}>
            <Grid item>
                <Avatar src={props.image} alt={`${props.fullname}`}/>
            </Grid>
            <Grid item>
                <Typography variant="subtitle1">{props.fullname}</Typography>
            </Grid>
        </Grid>
    );
}

export default SingleParticipant;