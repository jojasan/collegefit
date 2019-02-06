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
  table: {
    //minWidth: 1000,
  },
});

const steps = ['Profile', 'Finances', 'Additional Questions'];

const schoolOptions = schoolsDB.getSchoolList();

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
      numberInHousehold: 3,
      numberOfParents: 1, //TODO: needs to be read from the form! Maybe checkbox?
      parentPassedAwayMilitary: false,
      careerInTeaching: false,
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
      studentWorthInvestments: 0,
      pWorthInvestments: 0,
      studentWorthBiz: 0,
      pWorthBiz: 0,
      livingPreferences: 'onCampus',
      school: 1, //ID for UCLA, the defaul school
      isDependant: true,
      studentState: 'California',
      parentState: 'California',
      maritalStatus: 'Married',
      results : {
        federalAid: 0,
        stateAid: 0,
        privateAid: 0,
        totalCOA: 0,
        efc: 0,
      },
      schoolCompare1: 'UCLA',
      schoolCompare2: 'UC Berkeley',
      schoolCompare3: 'Northwestern University',
    }
  };

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
    this.state.inputs[name] = event.target.value;
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
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Results
                  </Typography>
                  <Typography variant="subtitle1">
                    Compare Schools
                  </Typography><br/>
                  <Paper className={classes.root}>
                    <Table className={classes.table}>
                      <TableHead>
                        <TableRow>
                          <TableCell>Concept</TableCell>
                          <TableCell><SimpleSelect
                            options={schoolOptions}
                            labelText="School 1"
                            selectedItem={this.state.inputs.schoolCompare1}
                            changeHandler={this.handleChange('schoolCompare1')}
                          /></TableCell>
                          <TableCell><SimpleSelect
                            options={schoolOptions}
                            labelText="School 2"
                            selectedItem={this.state.inputs.schoolCompare2}
                            changeHandler={this.handleChange('schoolCompare2')}
                          /></TableCell>
                          <TableCell><SimpleSelect
                            options={schoolOptions}
                            labelText="School 3"
                            selectedItem={this.state.inputs.schoolCompare3}
                            changeHandler={this.handleChange('schoolCompare3')}
                          /></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow key={1}>
                          <TableCell component="th" scope="row">Cost of Attendance</TableCell>
                          <TableCell align="right">{this.state.results.totalCOA}</TableCell>
                          <TableCell align="right">{'XXXX'}</TableCell>
                          <TableCell align="right">{'XXXX'}</TableCell>
                        </TableRow>
                        <TableRow key={2}>
                          <TableCell component="th" scope="row">Federal Aid</TableCell>
                          <TableCell align="right">{this.state.results.federalAid}</TableCell>
                          <TableCell align="right">{'XXXX'}</TableCell>
                          <TableCell align="right">{'XXXX'}</TableCell>
                        </TableRow>
                        <TableRow key={3}>
                          <TableCell component="th" scope="row">State Aid</TableCell>
                          <TableCell align="right">{this.state.results.stateAid}</TableCell>
                          <TableCell align="right">{'XXXX'}</TableCell>
                          <TableCell align="right">{'XXXX'}</TableCell>
                        </TableRow>
                        <TableRow key={4}>
                          <TableCell component="th" scope="row">Private Aid</TableCell>
                          <TableCell align="right">{this.state.results.privateAid}</TableCell>
                          <TableCell align="right">{'XXXX'}</TableCell>
                          <TableCell align="right">{'XXXX'}</TableCell>
                        </TableRow>
                        <TableRow key={5}>
                          <TableCell component="th" scope="row">EFC</TableCell>
                          <TableCell align="right">{this.state.results.efc}</TableCell>
                          <TableCell align="right">{'XXXX'}</TableCell>
                          <TableCell align="right">{'XXXX'}</TableCell>
                        </TableRow>
                        <TableRow key={6}>
                          <TableCell component="th" scope="row">ROI</TableCell>
                          <TableCell align="right">{this.state.results.roi}</TableCell>
                          <TableCell align="right">{'XXXX'}</TableCell>
                          <TableCell align="right">{'XXXX'}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Paper>
                  <br/><br/>
                  <Typography variant="subtitle1">
                    List of Schools
                  </Typography><br/>
                    <Paper className={classes.root}>
                      <Table className={classes.table}>
                        <TableHead>
                          <TableRow>
                            <TableCell>School</TableCell>
                            <TableCell>Cost Of Attendance</TableCell>
                            <TableCell>Total Aid</TableCell>
                            <TableCell>EFC</TableCell>
                            <TableCell>ROI</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow key={1}>
                            <TableCell component="th" scope="row">UCLA</TableCell>
                            <TableCell align="right">{this.state.results.totalCOA}</TableCell>
                            <TableCell align="right">{this.state.results.federalAid + this.state.results.stateAid + this.state.results.privateAid}</TableCell>
                            <TableCell align="right">{this.state.results.efc}</TableCell>
                            <TableCell align="right">{this.state.results.roi}</TableCell>
                          </TableRow>
                          <TableRow key={2}>
                            <TableCell component="th" scope="row">Berkeley</TableCell>
                            <TableCell align="right">{'XXXX'}</TableCell>
                            <TableCell align="right">{'XXXX'}</TableCell>
                            <TableCell align="right">{'XXXX'}</TableCell>
                            <TableCell align="right">{'XXXX'}</TableCell>
                          </TableRow>
                          <TableRow key={3}>
                            <TableCell component="th" scope="row">Northwestern</TableCell>
                            <TableCell align="right">{'XXXX'}</TableCell>
                            <TableCell align="right">{'XXXX'}</TableCell>
                            <TableCell align="right">{'XXXX'}</TableCell>
                            <TableCell align="right">{'XXXX'}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </Paper>
                    <Button onClick={this.emailReport} variant="contained"
                      color="primary" className={classes.button}>
                      Email Report
                    </Button>

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
