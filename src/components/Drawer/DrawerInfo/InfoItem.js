import classes from './classes.module.css'
import Typography from '@mui/material/Typography'
const InfoItem = (props) => {
    return (
        <>
            <div className={classes.icon}>
                {props.icon}
            </div>
            <div className={classes.title}>
                <Typography variant="h5">
                        {props.title}
                </Typography>
            </div>
            <div className={classes.description}>
                <Typography variant="h6">
                        {props.description}
                </Typography>
            </div>
        </>
    );
}

export default InfoItem;