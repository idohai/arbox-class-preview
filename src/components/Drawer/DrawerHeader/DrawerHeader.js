import Typography from '@mui/material/Typography';
import ButtonRow from './ButtonRow';
import classes from './classes.module.css';
import WorkoutIcon from '../../../assests/Icons/WorkoutIcon';

const DrawerHeader = () => {
    
    return(
        <>
            <div className={classes.button_row}>
                <ButtonRow />
            </div>
            <div className={classes.header}>
                <WorkoutIcon />
                <Typography variant="h1">
                    Workout of the day
                </Typography>
                
            </div>
        </>
    );
}

export default DrawerHeader;