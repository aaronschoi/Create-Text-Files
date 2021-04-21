import useStyles from '../styles';
import Button from '@material-ui/core/Button';
import { saveAs } from 'file-saver';

export default function Preview({ arrayToString }){
    const classes = useStyles();

    const handleCreateTXT = event => {
        event.preventDefault();
        const blob = new Blob([arrayToString], {type: 'text/plain;charset=utf-8'})
        saveAs(blob, 'sequence.txt');
    }

    return(
        <div className={classes.preview}>
            <p className={classes.previewString}>{arrayToString}</p>
            <Button variant="contained" color="primary" onClick={handleCreateTXT}>
        Generate .txt File
      </Button>
        </div>
    )
}