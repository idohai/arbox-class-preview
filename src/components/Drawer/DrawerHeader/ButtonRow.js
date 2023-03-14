import Button from '@mui/material/Button'
import EditIcon from '../../../assests/Icons/EditIcon'
import CancelIcon from '../../../assests/Icons/CancelIcon'

const ButtonRow = () => {

    const buttonStyle = {
        marginLeft: '1.6%',
        marginRight: '0.6%',
        textTransform: 'capitalize',
    }
    
    return(
        <>
            <Button style={buttonStyle} variant="text" startIcon={<EditIcon/>}>
                edit
            </Button>

            <Button style={buttonStyle} variant="text" startIcon={<CancelIcon/>}>
                cancel class
            </Button>

        </>
    );
}

export default ButtonRow;