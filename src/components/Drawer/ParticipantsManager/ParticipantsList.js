import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import SingleParticipant from './SingleParticipant'
import ActionButtons from './ActionButtons'
const ParticipantsList = (props) => {

    const { data, removeParticipantHandler } = props;

    const participantRows = data.map((participant, i) => (
        <ListItem key={i}>
            <Grid container>
                <Grid item sm={6}>
                    <SingleParticipant fullname={participant.fullname} image={participant.image}/>
                </Grid>
                <Grid item sm={6}>
                    <ActionButtons removeParticipantHandler={() => removeParticipantHandler(participant)} />
                </Grid>
            </Grid>
        </ListItem>
    ))
    return (
        <List>
            {participantRows}
        </List>

    );
};

export default ParticipantsList;