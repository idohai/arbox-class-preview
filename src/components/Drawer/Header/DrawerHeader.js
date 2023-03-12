import styles from './DHeader.module.css'
import editIcon from '../../../assests/Icons/EditIcon'
import Button from './Button/Button'

const DrawerHeader = () => {
    
    return(
        <>
            <Button
                className='edit' 
                text='edit'
                icon={editIcon}
            />
            <Button
                className='cancel'
                text='cancel class'
            />
        </>
    );
}

export default DrawerHeader;