import { useState } from "react";
import useStyles from "../styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import IncrementorNotification from "./IncrementorNotification";
import Preview from "./Preview";

export default function SequenceToText() {
  const [textToOutput, setTextToOutput] = useState({
    initialNumber: 0,
    finalNumber: 0,
    incrementor: 1,
    separatorText: ", ",
  });
  const [separator, setSeparator] = useState(true);
  const [reverseOrder, setReverseOrder] = useState(false);
  const [arrayToString, setArrayToString] = useState("");
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState(false);
  const [initialTooBig, setInitialTooBig] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setTextToOutput({
      ...textToOutput,
      incrementor: 1,
    });
  };

  const handleINClose = () => {
    setInitialTooBig(false);
    setTextToOutput({
      ...textToOutput,
      initialNumber: 0,
    });
  };

  const classes = useStyles();

  const inputHandler = (event) => {
    setTextToOutput({
      ...textToOutput,
      [event.target.name]: event.target.value,
    });
  };

  const generateHandler = (event) => {
    event.preventDefault();
    const iN = Number(textToOutput.initialNumber);
    const fN = Number(textToOutput.finalNumber);
    const inc = Number(textToOutput.incrementor);
    if (inc > 0 && iN < fN) {
      setPreview(true);
      const array = [];
      if (reverseOrder) {
        for (let i = iN; i <= fN; i += inc) {
          //for whatever reason, if inc is not 1, then it becomes a string
          array.unshift(i);
        }
      } else {
        for (let i = iN; i <= fN; i += inc) {
          array.push(i);
        }
      }
      if (separator) {
        setArrayToString(array.join(textToOutput.separatorText));
      } else {
        setArrayToString(array.join(""));
      }
    } else {
      setInitialTooBig(true);
    }
    if (inc <= 0) {
      setOpen(true);
    }
  };

  const screenWidth = window.innerWidth;

  return (
    <div className={classes.mainSeq}>
      <IncrementorNotification
        open={open}
        handleClose={handleClose}
        incrementor={textToOutput.incrementor}
        inc={true}
      />
      <IncrementorNotification
        open={initialTooBig}
        handleClose={handleINClose}
        incrementor={textToOutput.initialNumber}
        inc={false}
      />
      <Typography variant={screenWidth > 900 ? 'h2' : 'h6'}>
        Create a list of Numbers in a .TXT File
      </Typography>
      <IncrementorNotification open={open} handleClose={handleClose} />
      <div className={classes.seqtext}>
        <FormControl component="fieldset" className={classes.seqInputs}>
          <FormLabel component="legend">Parameters for the .txt file</FormLabel>

          <TextField
            id="outlined-number"
            name="initialNumber"
            value={textToOutput.initialNumber}
            onChange={inputHandler}
            label="Initial Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />

          <TextField
            id="outlined-number"
            name="finalNumber"
            value={textToOutput.finalNumber}
            onChange={inputHandler}
            label="Final Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />

          <TextField
            id="outlined-number"
            name="incrementor"
            value={textToOutput.incrementor}
            onChange={inputHandler}
            label="Increment by"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />

          <TextField
            id="outlined-helperText"
            name="separatorText"
            value={textToOutput.separatorText}
            onChange={inputHandler}
            label="Separator Text"
            type="Helper text"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />

          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={separator}
                  onChange={() => setSeparator((original) => !original)}
                  name="separatorSwitch"
                />
              }
              label="Number Separator"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={reverseOrder}
                  onChange={() => setReverseOrder((original) => !original)}
                  name="reverseOrder"
                />
              }
              label="Reverse Order"
            />
          </FormGroup>
          <Button variant="contained" color="primary" onClick={generateHandler}>
            Generate Preview
          </Button>
        </FormControl>
        {screenWidth < 900 ? null : (
          <div className={classes.previewField}>
            <Typography variant="h3">Preview</Typography>
            {preview ? <Preview arrayToString={arrayToString} /> : null}
          </div>
        )}
      </div>
      {screenWidth > 900 ? null : (
          <div className={classes.previewField}>
            <Typography variant="h3">Preview</Typography>
            {preview ? <Preview arrayToString={arrayToString} /> : null}
          </div>
        )}
    </div>
  );
}
