import { Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import Homepage from './homepage/Homepage';
import SequenceToText from './SequenceToText/SequenceToText';
import { CssBaseline } from '@material-ui/core';
import ApplicationBar from './AppBar/ApplicationBar'
import useStyles from './styles';

function App() {
  const classes = useStyles();

  return (
    <Fragment >
      <div className={classes.app}>
      <CssBaseline />
      <ApplicationBar />
      <Switch>
      <Route path='/seqtext/'>
          <SequenceToText />
        </Route>
        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
      </div>
    </Fragment>
  );
}

export default App;
