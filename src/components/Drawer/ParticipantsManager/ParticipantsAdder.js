import { useState } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'

import SingleParticipant from './SingleParticipant';
import PlusIcon from '../../../assests/Icons/PlusIcon';

const ParticipantsAdder = (props) => {

    const { data, addParticipantHandler, } = props;
    const [selectOpen, setSelectOpen] = useState(false);


    const handleSelectOpen = () => {
        setSelectOpen(true);
    };

    const handleSelectClose = () => {
        setSelectOpen(false);
    }

    const menuItems = data.map((participant, i) => (
            <MenuItem key={i} value={participant}>
                <SingleParticipant fullname={participant.fullname} image={participant.image} />
            </MenuItem>
        )
    )

    return (
        <Grid container columns={12} style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>
            <Grid item sm={4} md={4} style={{display: 'flex', alignItems: 'center'}}>
                <Typography variant='subtitle1'>
                    participants
                </Typography>
            </Grid>
            <Grid item sm={8} md={8}>
                <FormControl fullWidth color='button' >
                    <InputLabel shrink={false} id='participants-selector-label'>{selectOpen ? 'To' : 'Add client'}</InputLabel>
                        <Select
                        value=''
                        labelId='participants-selector-label'
                        id='participants-selector'
                        onChange={(e) => addParticipantHandler(e.target.value)}
                        onOpen={handleSelectOpen}
                        onClose={handleSelectClose}
                        IconComponent={PlusIcon}
                            >{menuItems}
                        </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default ParticipantsAdder;