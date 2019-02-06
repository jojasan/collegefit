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
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: props.selectedItem,
      options: props.options,
      labelText: props.labelText,
    }
  }

  handleChange = event => {
    this.setState({ selectedItem: event.target });
    console.log("Dropdown State Updated");
    console.log(this.state.selectedItem);
  };

  render() {
    const { classes } = this.props;
    const { labelText, options, selectedItem } = this.state;
    //console.log("Rendering again with: ");
    //console.log(selectedItem);
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl required className={classes.formControl} fullWidth>
          <InputLabel htmlFor="state">{labelText}</InputLabel>
          <Select
            value={selectedItem.value}
            onChange={this.handleChange}
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
