import { useState } from 'react';

import Container from '@mui/material/Container'

import ParticipantsAdder from './ParticipantsAdder'
import ParticipantsList from './ParticipantsList'
import DaganImage from '../../../assests/Images/dagan-image.jpg'
import IdoImage from '../../../assests/Images/ido-image.jpg'
const ParticipantsManager = () => {

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
    
    const [hardcodedParticipantsToAddData, setToAddData] = useState([
        {
            fullname: 'Dagan Lev',
            image: DaganImage
        },
        {
            fullname: 'Ido Hai',
            image: IdoImage
        }
    ])

    const [hardcodedAddedParticipantsData, setAddedData] = useState([

    ])

    const addParticipantHandler = (toAdd) => {
        setAddedData( [...hardcodedAddedParticipantsData, toAdd] );
        setToAddData( hardcodedParticipantsToAddData.filter( (participant) => {
            return (participant !== toAdd);
        }));
    };

    const removeParticipantHandler = (toRemove) => {
        setToAddData( [...hardcodedParticipantsToAddData, toRemove] );
        setAddedData( hardcodedAddedParticipantsData.filter( (participant) => {
            return (participant !== toRemove);
        }));
    };
    
    return (
        <Container>
            <ParticipantsAdder
                data={hardcodedParticipantsToAddData}
                addParticipantHandler={addParticipantHandler}
            />
            <ParticipantsList
            data={hardcodedAddedParticipantsData}
            removeParticipantHandler={removeParticipantHandler}
            />
        </Container>
    )
}

export default ParticipantsManager;