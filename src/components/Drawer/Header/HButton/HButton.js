import Button from '@mui/material/Button';
import classes from './classes.module.css'

const HButton = (props) => {
    return (
        <Button 
        {...props}
        >
            {props.text}
        </Button>
    );
}

export default HButton;