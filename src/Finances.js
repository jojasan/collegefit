import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});

class Finances extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Student Finances
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel required htmlFor="incomeAmountStudent">Income before taxes (best guess)</InputLabel>
              <Input
                id="incomeAmountStudent"
                //value={this.state.amount}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel required htmlFor="taxesPaidStudent">Taxes paid (best guess)</InputLabel>
              <Input
                id="taxesPaidStudent"
                //value={this.state.amount}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="savingsAccount">Money in Checking/Savings account</InputLabel>
              <Input
                id="savingsAccount"
                //value={this.state.amount}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="studentInvestments">Net worth of investments</InputLabel>
              <Input
                id="studentInvestments"
                //value={this.state.amount}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="studentBusinessFarmWorth">Net worth of business/farm</InputLabel>
              <Input
                id="studentBusinessFarmWorth"
                //value={this.state.amount}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
          </Grid>
        </Grid>
        <br/>
        <Typography variant="h6" gutterBottom>
          Family Finances
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel required htmlFor="parent1Income">Parent 1 Income before taxes</InputLabel>
              <Input
                id="parent1Income"
                //value={this.state.amount}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="parent2Income">Parent 2 Income before taxes</InputLabel>
              <Input
                id="parent2Income"
                //value={this.state.amount}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel required htmlFor="p1p2taxesPaid">Taxes paid by Parent 1 + Parent 2</InputLabel>
              <Input
                id="p1p2taxesPaid"
                //value={this.state.amount}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
          </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="parentsAccount">Money in Checking/Savings account</InputLabel>
            <Input
              id="parentsAccount"
              //value={this.state.amount}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="parentInvestments">Net worth of investments</InputLabel>
              <Input
                id="parentInvestments"
                //value={this.state.amount}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="parentBusinessFarmWorth">Net worth of business/farm</InputLabel>
              <Input
                id="parentBusinessFarmWorth"
                //value={this.state.amount}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
  }

export default withStyles(styles)(Finances);
