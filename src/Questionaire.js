import React, { Component } from 'react';
import 'typeface-roboto';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header.js'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SwitchesGroup from './SwitchesGroup.js'
import SimpleSelect from './SimpleSelect.js'

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
});

const steps = ['Student Profile', 'Parent Status', 'Household Info', 'Independency Status'];

class Questionaire extends Component {
  state = {
    activeStep: 0,
    age: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Header/>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Questionaire
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Typography variant="h6" gutterBottom>
              Student Profile
            </Typography>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="fname"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SimpleSelect/>
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  id="dob"
                  name="dob"
                  label="Date of Birth"
                  type="date"
                  defaultValue="2000-01-01"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  id="GPA"
                  name="GPA"
                  label="GPA (over 4)"
                  fullWidth
                  type="number"
                  min="0"
                  max="4"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  id="SAT"
                  name="SAT"
                  label="SAT Score"
                  fullWidth
                  type="number"
                  min="0"
                  max="2000"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  id="ACT"
                  name="ACT"
                  label="ACT Score"
                  fullWidth
                  type="number"
                  min="0"
                  max="2000"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SwitchesGroup/>
              </Grid>
            </Grid>

          </Paper>
        </main>

      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Questionaire);
