import HButton from './HButton/HButton'
import EditIcon from '../../../assests/Icons/EditIcon'
import CancelIcon from '../../../assests/Icons/CancelIcon'



const DrawerHeader = () => {
    
    return(
        <>
            <HButton
            startIcon={<EditIcon/>}
            text='edit'
            />

            <HButton
            startIcon={<CancelIcon/>}
            text='cancel class'
            >
            </HButton>

        </>
    );
}

export default DrawerHeader;