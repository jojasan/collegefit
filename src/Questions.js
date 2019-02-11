import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Profile from './Profile';
import Finances from './Finances';
import AdditionalQs from './AdditionalQs';
import runEngine from './Engine/Engine';
import schoolsDB from './Engine/SchoolsDB';
import SimpleSelect from './SimpleSelect.js'
import Grid from '@material-ui/core/Grid';
import Results from './Results';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 850,
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
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['Profile', 'Finances', 'Additional Questions'];

const schoolOptions = schoolsDB.getSchoolList();

class Questions extends React.Component {
  state = {
    activeStep: 0,
    inputs: {
      //STUDENT INFO
      studentName: 'John',
      studentDoB: '2000-01-01',
      studentIncome: 2000,
      studentUntaxedIncome: 0,
      gpa: 3.3,
      studentTotalAdditionalInfo: 0,
      studentIncomeTaxPaid: 200,
      studentCashSavingsCheckings: 0,
      studentWorthInvestments: 0,
      studentWorthBiz: 0,
      studentState: 'California',
      livingPreferences: 'onCampus',
      careerInTeaching: false,
      //FAMILY INFO
      parent1DoB: '1980-01-01',
      parent2DoB: '1980-01-01',
      numberInCollege: 1,
      numberInHousehold: 3,
      numberOfParents: 1, //TODO: needs to be read from the form! Maybe checkbox?
      parentPassedAwayMilitary: false,
      p1Income: 35000,
      p2Income: 15000,
      pUntaxedIncome: 0,
      pTotalAdditionalInfo: 0,
      incomeTaxPaidP1P2: 5000,
      pCashSavingsCheckings: 0,
      pWorthInvestments: 0,
      pWorthBiz: 0,
      isDependant: true,
      parentState: 'California',
      maritalStatus: 'Married',
      //OPTIONS
      schoolCompare1: 'UCLA',
      schoolCompare2: 'UC Berkeley',
      schoolCompare3: 'Northwestern University',
    },
    results : [],
  };

/*
{
  federalAid: 0,
  stateAid: 0,
  privateAid: 0,
  totalCOA: 0,
  efc: 0,
},
*/

  handleNext = () => {
    let nextStep = this.state.activeStep + 1;
    if(nextStep === steps.length ) {
      this.setState(state => ({
        activeStep: state.activeStep + 1,
        results: runEngine(this.state.inputs)
      }));
    } else {
      this.setState(state => ({
        activeStep: state.activeStep + 1,
      }));
    }
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

  handleChange = name => event => {
    console.log('Changing values. Active Step is: ' + this.state.activeStep);
    this.state.inputs[name] = event.target.value;
    if(this.state.activeStep === steps.length) { //TODO: this is in a different context, it is the dropdown's context and not Question
      this.state.results = runEngine(this.state.inputs);
    }
    this.setState({});
  };

  emailReport = () => {
    //TODO
  };

  getStepContent(step) {
    switch (step) {
      case 0:
        return <Profile
            inputs={this.state.inputs}
            changeHandler={this.handleChange}
          />;
      case 1:
        return <Finances
            inputs={this.state.inputs}
            changeHandler={this.handleChange}
          />;
      case 2:
        return <AdditionalQs />;
      default:
        throw new Error('Unknown step');
    }
  }

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              TuitionFox
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
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
            <React.Fragment>
              {activeStep === steps.length ? (
                <Results
                  inputs={this.state.inputs}
                  changeHandler={this.handleChange}
                  results={this.state.results}
                  emailFn={this.emailReport}
                />
              ) : (
                <React.Fragment>
                  {this.getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={this.handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Get Results' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Questions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Questions);
