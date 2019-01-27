import React, { Component } from 'react';
import 'typeface-roboto';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";

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
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

const sections = [
  'Success Stories',
  'Partners',
  'Join the Team',
  'About Us',
];

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Toolbar className={classes.toolbarMain}>
            <Button size="small" component={Link} to="/">Home</Button>
            <Typography
              component="h2"
              variant="h4"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
            >
              TuitionFox
            </Typography>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <Button variant="outlined" size="small">
              Sign up
            </Button>
        </Toolbar>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Header);
