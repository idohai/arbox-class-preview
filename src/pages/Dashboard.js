import { useRef, useEffect, useState } from 'react';
import Drawer from '../components/Drawer/Drawer'

const Dashboard = () => {
    
    const drawerRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.onclick = (e) => {
            if (e.target.contains(drawerRef.current)) {
                setIsOpen(!isOpen);
            }
        }
    },[isOpen]);

    return (
        <div>
            {/* <div style={{display: 'flex', justifyContent: 'left', alignContent: 'left'}}> */}
            <div ref={drawerRef}>
                <Drawer isOpen={isOpen}>
                </Drawer>
            </div>
        </div>                 
    );
}

export default Dashboard;