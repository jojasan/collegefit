import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
  },
  selectControl: {
    marginTop: theme.spacing.unit * 2,
    //minWidth: 260,
  },
});

class SimpleSelect extends React.Component {
  render() {
    const { classes, labelText, options, selectedItem, changeHandler, varName } = this.props;
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl required className={classes.formControl} fullWidth>
          <InputLabel htmlFor="state">{labelText}</InputLabel>
          <Select
            value={selectedItem}
            onChange={changeHandler}
            autoWidth
            name= {labelText.replace(/\s/g, "").concat("Dropdown")}
            inputProps={{
              id: 'state',
            }}
            className={classes.selectControl}
          >
            { options.map(item =>
              <MenuItem key={item.objectID} value={item.value}>{item.label}</MenuItem>
            )}
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
