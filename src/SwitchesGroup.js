import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

class SwitchesGroup extends React.Component {
  state = {
    usCitizen: false,
    permanentResident: false,
    DACAStudent: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Are you any of the following?</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.usCitizen}
                onChange={this.handleChange('usCitizen')}
                value="usCitizen"
              />
            }
            label="US Citizen"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.permanentResident}
                onChange={this.handleChange('permanentResident')}
                value="permanentResident"
              />
            }
            label="Permanent Resident"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.DACAStudent}
                onChange={this.handleChange('DACAStudent')}
                value="DACAStudent"
              />
            }
            label="DACA Student"
          />
        </FormGroup>
        <FormHelperText>Warning</FormHelperText>
      </FormControl>
    );
  }
}

export default SwitchesGroup;
