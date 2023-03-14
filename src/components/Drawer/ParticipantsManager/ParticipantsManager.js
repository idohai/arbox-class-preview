import { useState } from 'react';

import Container from '@mui/material/Container';

import ParticipantsAdder from './ParticipantsAdder';
import ParticipantsList from './ParticipantList/ParticipantsList';

//some images are a bit heavy so it may affect loading times 
import DaganImage from '../../../assests/Images/dagan-image_lowres.jpg';
import IdoImage from '../../../assests/Images/chase-image_lowres.jpg';
import OrenImage from '../../../assests/Images/DSC05193_lowres.jpg';
import JumpImage from '../../../assests/Images/jump-image_lowres.jpg';
import LoekImage from '../../../assests/Images/loek-image_lowres.jpg';
import OrImage from '../../../assests/Images/DSC00214_lowres.jpg';
import SilvaImage from '../../../assests/Images/DSC06054_lowres.jpg';;




const ParticipantsManager = () => {
   
    const [hardcodedParticipantsToAddData, setToAddData] = useState([
        {
            fullname: 'Dagan Lev',
            image: DaganImage
        },
        {
            fullname: 'chase ball',
            image: IdoImage
        },
        {
            fullname: 'oren strong',
            image: OrenImage,
        },
        {
            fullname: 'or nice',
            image: OrImage
        }
    ]);

    const [hardcodedAddedParticipantsData, setAddedData] = useState([
        {
            fullname: 'yaniv nivi',
            image: JumpImage,
        },
        {
            fullname: 'loek quaed',
            image: LoekImage
        },
        {
            fullname: 'silva leg',
            image: SilvaImage
        }
    ]);

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
        <Container sx={{mt: '3%'}}>
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