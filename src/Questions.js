import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Profile from './Profile';
import Finances from './Finances';
import AdditionalQs from './AdditionalQs';
import runEngine from './Engine/Engine';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
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

class Questions extends React.Component {
  state = {
    activeStep: 0,
    inputs: {
      studentName: '',
      studentDoB: '2000-01-01',
      parent1DoB: '1980-01-01',
      parent2DoB: '1980-01-01',
      gpa: 3.3,
      numberInCollege: 1,
      numberInHousehold: 2,
      numberOfParents: 1, //TODO: needs to be read from the form! Maybe checkbox?
      studentIncome: 0,
      p1Income: 0,
      p2Income: 0,
      studentUntaxedIncome: 0,
      pUntaxedIncome: 0,
      studentTotalAdditionalInfo: 0,
      pTotalAdditionalInfo: 0,
      studentIncomeTaxPaid: 0,
      incomeTaxPaidP1P2: 0,
      studentCashSavingsCheckings: 0,
      pCashSavingsCheckings: 0,
      pWorthInvestments: 0,
      pWorthBiz: 0,
      studentState: {
        name: '',
        value: '',
      },
      parentState: {
        name: '',
        value: '',
      },
      maritalStatus: {
        name: '',
        value: '',
      }
    }
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

  handleChange = name => event => {
    this.state.inputs[name] = event.target.value;
    this.setState({});
    console.log('State updated:');
    console.log(this.state);
  };

  getStepContent(step) {
    switch (step) {
      case 0:
        return <Profile
            inputs={this.state.inputs} changeHandler={this.handleChange}
          />;
      case 1:
        return <Finances />;
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
              Tuition Fox
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
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Here should be the results section.
                  </Typography>
                  <Typography variant="subtitle1">
                    Printing what has been read from the form. (see log)
                    {runEngine(this.state.inputs)}
                  </Typography>
                </React.Fragment>
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
