import EditIcon from '../../../../assests/Icons/EditIcon';
import CancelIcon from '../../../../assests/Icons/CancelIcon'
import classes from './Button.module.css';
const Button = (props) => {

    return(
        <button
        type={props.type || "button"}
        className={`${classes.button} ${props.className}`}
        onClick={props.onClick}
        disabled={props.disabled}
        >
                <i><EditIcon /></i>
            <span className={classes.button__text}>{props.text}</span>
            <span className={classes.button__icon}>
            </span>
        </button>
    );
}

export default Button;