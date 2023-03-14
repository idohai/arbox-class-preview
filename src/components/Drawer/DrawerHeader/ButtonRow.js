import Button from '@mui/material/Button'
import EditIcon from '../../../assests/Icons/EditIcon'
import CancelIcon from '../../../assests/Icons/CancelIcon'
import { Typography } from '@mui/material'

const ButtonRow = () => {

    const buttonStyle = {
        // marginLeft: '1.6%',
        marginRight: '4%',
    }
    
    return(
        <>
            <Button style={buttonStyle} variant="text" startIcon={<EditIcon/>}>
                <Typography variant='h3'>
                    edit
                </Typography>
            </Button>

            <Button style={buttonStyle} variant="text" startIcon={<CancelIcon/>}>
                <Typography variant='h3'>
                    cancel class
                </Typography>
            </Button>

        </>
    );
}

export default ButtonRow;