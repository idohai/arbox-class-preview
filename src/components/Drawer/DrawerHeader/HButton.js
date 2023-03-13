import Button from '@mui/material/Button';

const HButton = (props) => {

    
    const styles = {
        marginLeft: '1.6%',
        marginRight: '0.6%',
        border: 'none', 
        background: 'none',
        textAlign: 'center',
        textTransform: 'capitalize',
    }

    const {text, ...rest} = props

    return (
        <Button style={styles}
        {...rest}
        >
            {text}
        </Button>
    );
}

export default HButton;