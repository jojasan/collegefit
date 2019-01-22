import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import SimpleSelect from './SimpleSelect.js'

const states = [
  {
    value: 'CA',
    label: 'California',
    objectID: 1,
  },
  {
    value: 'NY',
    label: 'New York',
    objectID: 2,
  },
  {
    value: 'FL',
    label: 'Florida',
    objectID: 3,
  },
  {
    value: 'TX',
    label: 'Texas',
    objectID: 4,
  },
  {
    value: 'MS',
    label: 'Massachussets',
    objectID: 5,
  },
];

const maritalStatus = [
  {
    value: 'Single',
    label: 'Single',
    objectID: 1
  },
  {
    value: 'Married',
    label: 'Married',
    objectID: 2
  },
  {
    value: 'Divorced',
    label: 'Divorced',
    objectID: 3
  },
];

class Profile extends React.Component {
  render() {
    const { inputs, handleChange } = this.props;
    console.log("Checkin inputs at Profile")
    console.log(inputs);
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Student Profile
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="studentName"
              name="studentName"
              label="Name"
              fullWidth
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              required
              id="dobStudent"
              name="dobStudent"
              label="Date of Birth"
              type="date"
              defaultValue="2000-01-01"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
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
          <Grid item xs={12} sm={6}>
            <SimpleSelect
              options={states}
              labelText="State of Residence"
              selectedItem={inputs.selectedState}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="primary" name="isTeacher" value="yes" />}
              label="Are you planning to become a Teacher?"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="primary" name="parentsPassedMilitary" value="yes" />}
              label="Either of your parents passed away in Iraq/Afganistan while serving in the US Military?"
            />
          </Grid>
        </Grid>
        <br/>
        <Typography variant="h6" gutterBottom>
          Parents and Household
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="dobParent1"
              name="dobParent1"
              label="Parent 1: Date of Birth"
              type="date"
              defaultValue="1980-01-01"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="dobParent2"
              name="dobParent2"
              label="Parent 2: Date of Birth"
              type="date"
              defaultValue="1980-01-01"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SimpleSelect
              options={states}
              labelText="Main Parent State of Residence"
              selectedItem={inputs.selectedState}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SimpleSelect
              options={maritalStatus}
              labelText="Marital Status"
              selectedItem={inputs.selectedParentMaritalStatus}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="numberInHousehold"
              name="numberInHousehold"
              label="# of people in your household"
              fullWidth
              type="number"
              min="0"
              max="10"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="numberInCollege"
              name="numberInCollege"
              label="# of people in college"
              fullWidth
              type="number"
              min="0"
              max="10"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
    }
}

export default Profile;
