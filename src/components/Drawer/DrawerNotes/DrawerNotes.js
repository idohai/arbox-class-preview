import Typography from '@mui/material/Typography';
const DrawerNotes = (props) => {

    return (
        <>
            <Typography variant='h4' textTransform='capitalize'>
                {props.title}
            </Typography>
            <Typography variant='h6'>
                {props.description}
            </Typography>
        </>
    );
}

export default DrawerNotes;