import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
const DrawerNotes = (props) => {

    return (
        <Container>
            <Typography variant='subtitle1'>
                {props.title}
            </Typography>
            <Typography variant='subtitle2'>
                {props.description}
            </Typography>
        </Container>
    );
}

export default DrawerNotes;