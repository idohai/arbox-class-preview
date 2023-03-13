import ButtonRow from './ButtonRow'
import classes from './classes.module.css'
import WorkoutIcon from '../../../assests/Icons/WorkoutIcon'
import Typography from '@mui/material/Typography'
const DrawerHeader = () => {
    
    return(
        <>
            <div className={classes.button_row}>
                <ButtonRow />
            </div>
            <div className={classes.header}>
                <WorkoutIcon />
                <Typography variant="h6">
                    Workout of the day
                </Typography>
                
            </div>
        </>
    );
}

export default DrawerHeader;