import classes from './Drawer.module.css';
import DrawerHeader from './DrawerHeader/DrawerHeader';
import DrawerInfo from './DrawerInfo/DrawerInfo';

const Drawer = (props) => {
 
    const isOpen = props.isOpen;
    return (
        <>
            <div className={`${classes.drawer} ${!isOpen ? classes.close : classes.open }`}>
                <div className={classes.content}>
                    <div className={classes.header}>
                        <DrawerHeader />
                    </div>
                    <div className={classes.info}>
                        <DrawerInfo />
                    </div>
                </div>
            </div>
        </>
    )
    
};


export default Drawer;