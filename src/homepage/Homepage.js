import { Typography } from '@material-ui/core';
import useStyles from '../styles';

export default function Homepage(){
    const classes = useStyles();

    return (
        <div className={classes.homepage}>
            <Typography variant='h1'>Hello!</Typography>
            <p className={classes.homepageMessage}>This is quick project I made create quick text files whenever I need them. Hopefully, you can use this too!</p>
        </div>
    )
};