import { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid';
import TrashIcon from '../../../assests/Icons/TrashIcon';
import WhatsappIcon from '../../../assests/Icons/WhatsappIcon';
const ActionButtons = (props) => {
    
    const { removeParticipantHandler } = props
    const [isChecked, setIsChecked] = useState(false);

    const containerSx = {display: 'flex', justifyContent: 'space-between', alignContent: 'center'}
    

    const buttonHandler = () => {
        setIsChecked(!isChecked);
    };

    return (
        <Grid container  justifyContent='space-between' alignItems='center'>
            <Grid item sm={6}>
                <Button
                color='button' fullWidth='true'
                    variant = {isChecked ? 'outlined' : 'contained'}
                    
                    onClick={(e) => buttonHandler(e)}>
                        {isChecked ? 'Checked' : 'Check in'}
                </Button>
            </Grid>
            <Grid item sm={2}></Grid>
            <Grid item sm={1}>
                <IconButton><WhatsappIcon /></IconButton>
            </Grid>
                {/* <Container sx = {{display: 'flex', flexWrap: 'wrap' , justifyContent: 'right', alignContent: 'center'}}> */}
            <Grid item sm={1}>
                <IconButton onClick={removeParticipantHandler}><TrashIcon/></IconButton>
            </Grid>
                {/* </Container> */}
        </Grid>
    );
};

export default ActionButtons;