import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function IncrementorNotification({open, handleClose, incrementor, inc}) {

  return (
    <div>
    {inc ? 
    (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Uh Oh :O"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`You can't increment by ${incrementor}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Sounds Good!
          </Button>
        </DialogActions>
      </Dialog>
    ) : (<Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Uh Oh :O"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {`The initial number ${incrementor} is too big! As in it has to be larger than the final number`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Sounds Good!
        </Button>
      </DialogActions>
    </Dialog>)}
    </div>
  );
}