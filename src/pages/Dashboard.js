import { useRef, useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Drawer from '../components/Drawer/Drawer';
import classes from './Dashboard.module.css';

const Dashboard = () => {
    
    const theme = createTheme({

        palette: {
            button: {
                main: '#05C050',
                light: '#48ca6c',
                dark: '#009e3a',
                contrastText: '#FFFFFF',
            }
        },

        typography: {
            fontFamily: [
                'Roboto',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),

            h1: {
                // fontSize: 18,
                // fontWeight: 500,
                fontSize: '1.6rem',
                fontWeight: 'bold',
            },
            h2: {
                // fontSize: 13,
                // fontWeight: 500,
                fontSize: '1.4rem'
            },
            h3: {
                // fontSize: 12,
                fontSize: '1rem',
                fontWeight: 400,
                textTransform: 'capitalize',
            },
            h4: {
                // fontSize: 11,
                fontSize: '1.1rem',
                fontWeight: 300
            },
            subtitle1: {
                // fontSize: 15,
                fontSize: '1.2rem',
                fontWeight: 500,
                textTransform: 'capitalize',
            },
            subtitle2: {
                // fontSize: 13,
                fontSize: '0.9rem',
                fontWeight: 200,
            }
        },
    })
    
    /* need to set up custom size to make drawer responsive ;( */

    // const useStyles = makeStyles((theme) => ({
    //     [theme.breakpoints.down('sm')]: {
    //         fontSize: '0.5rem'
    //     }, ...
    // }));


    const dashboardRef = useRef();
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    useEffect(() => {
        const toggleDrawer = (e) => {
            if (dashboardRef.current.contains(e.target)){
                setDrawerIsOpen(!drawerIsOpen);
            }
        };
        window.addEventListener('click', toggleDrawer);
        return () => window.removeEventListener('click', toggleDrawer);
    },[drawerIsOpen]);

    return (
        <div>
            <div ref={dashboardRef}
            className={`${classes.backdrop} ${drawerIsOpen ? classes.open : classes.close}`}>
            </div>
            <div className={`${classes.drawer} ${!drawerIsOpen ? classes.close : classes.open }`}>
                <ThemeProvider theme={theme}>
                    <Drawer drawerIsOpen={true} />
                </ThemeProvider>
            </div>
        </div>                 
    );
}

export default Dashboard;