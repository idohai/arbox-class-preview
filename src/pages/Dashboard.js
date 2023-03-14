import { useRef, useEffect, useState } from 'react';
import Drawer from '../components/Drawer/Drawer'
import classes from './Dashboard.module.css'
const Dashboard = () => {
    
    const dashboardRef = useRef();
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    useEffect(() => {
        const handleClick = (e) => {
            if (dashboardRef.current.contains(e.target)){
                setDrawerIsOpen(!drawerIsOpen);
            }
        };
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    },[drawerIsOpen]);

    return (
        <div>
            <div ref={dashboardRef}
            className={`${classes.backdrop} ${drawerIsOpen ? classes.open : classes.close}`}>
            </div>
            <div className={`${classes.drawer} ${!drawerIsOpen ? classes.close : classes.open }`}>
                <Drawer drawerIsOpen={true}>
                </Drawer>
            </div>
        </div>                 
    );
}

export default Dashboard;