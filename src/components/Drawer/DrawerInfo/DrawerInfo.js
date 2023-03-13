import classes from './classes.module.css'
import InfoItem from './InfoItem'

import TrainerIcon from '../../../assests/Icons/TrainerIcon'
import ClockIcon from '../../../assests/Icons/ClockIcon'
import ParticipantsIcon from '../../../assests/Icons/ParticipantsIcon'
const DrawerInfo = () => {
    return (
        <div className={classes.container}>
            <div className={classes.item}>
                <InfoItem
                icon={<TrainerIcon />}
                title='tom a'
                description='coach'
                />
            </div>
            <div className={classes.item}>
                <InfoItem
                icon={<ClockIcon />}
                title='16:15'
                description='start time'
                />
            </div>
            <div className={classes.item}>
                <InfoItem
                icon={<ParticipantsIcon />}
                title='3/15'
                description='participants'
                />
            </div>
        </div>
    );
}

export default DrawerInfo;