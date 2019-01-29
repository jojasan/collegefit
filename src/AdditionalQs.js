import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
});

function AdditionalQs(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Some final questions
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" name="isFreeLunch" value="yes" />}
            label="Are you on a free-lunch program or have Medi-Cal?"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" name="is1040TaxReturn" value="yes" />}
            label="Did your parents filed or were elegible for a 1040A, 1040EZ, 1040, or were they not required to file any income tax return?"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" name="isDislocatedWorker" value="yes" />}
            label="Are any of your parents a dislocated worker?"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

AdditionalQs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdditionalQs);
