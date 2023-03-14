import classes from './Drawer.module.css';
import DrawerHeader from './DrawerHeader/DrawerHeader';
import DrawerInfo from './DrawerInfo/DrawerInfo';
import DrawerNotes from './DrawerNotes/DrawerNotes'
import ParticipantsManager from './ParticipantsManager/ParticipantsManager'

const Drawer = () => {
 
    return (
        <>
            <div className={classes.drawer}>
                <div className={classes.content}>
                    <div className={classes.header}>
                        <DrawerHeader />
                    </div>
                    <div className={classes.info}>
                        <DrawerInfo />
                    </div>
                    <div className={classes.notes}>
                        <DrawerNotes
                            title='you should know...'
                            description='Dagan & Eden which participates in the class have a debt'
                        />
                    </div>
                    <div className={classes.participants}>
                        <ParticipantsManager />

                    </div>
                </div>
            </div>
        </>
    )
    
};


export default Drawer;