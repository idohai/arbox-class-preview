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

    const { data, addParticipantHandler, } = props
    const [selectOpen, setSelectOpen] = useState(false);

    // const [selectStyle, setSelectStyle] = useState({style: {
    //     color: 'green',
    //     textDecoration: 'underline',
    //     border: 'green',
    //     border: '0px',
    //     textDecoration: 'underline'

    // }});



    // const selectSx = {
    //     "&:hover": {
    //         "&&fieldset": {
    //             border: "3px solid green"
    //         }
    //     }
    // }


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
        <Grid container columns={12} style={{justifyContent: 'space-between'}}>
            <Grid item sm={4} md={4}>
                <Typography variant='h5' textTransform='capitalize'>
                    participants
                </Typography>
            </Grid>
            <Grid item sm={8} md={8}>
                <FormControl fullWidth>
                    <InputLabel shrink={false} id='participants-selector-label'>{selectOpen ? 'To' : 'Add client'}</InputLabel>
                        <Select
                        value=''
                        labelId='participants-selector-label'
                        id='participants-selector'
                        onChange={(e) => addParticipantHandler(e.target.value)}
                        onOpen={handleSelectOpen}
                        onClose={handleSelectClose}
                        IconComponent={PlusIcon}
                        // SelectDisplayProps={{ style: { borderColor: 'green', paddingBottom: 8 } }}
                        // sx={selectSx}
                        // inputProps={{selectSx}}
                        >           
                            {menuItems}
                        </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default ParticipantsAdder;