import React, { Component } from 'react';
import 'typeface-roboto';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import iMain from './img/main2.jpg'; // Import using relative path
import Header from './Header.js'

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
  mainFeaturedPost: {
    //backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
    backgroundImage: `url(${iMain})`
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
});

const sections = [
  'Success Stories',
  'Partners',
  'Join the Team',
  'About Us',
];

class Landing extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {/*
        <div className={classes.layout}>
          This is a test of landing
          The passed prop is: {this.props.value} <br/>
          <button onClick={this.props.onClick}>ClickMe</button>
        </div>
        */}
        <CssBaseline />
        <div className={classes.layout}>
          <Header/>
          <MainContentStyled/>
        </div>
      </React.Fragment>
    );
  }
}

class MainContent extends Component {
  render(){
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Toolbar variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Typography color="inherit" noWrap key={section}>
              {section}
            </Typography>
          ))}
        </Toolbar>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    We help you navigate the cost of school
                  </Typography>
                  <Typography variant="h6" color="inherit" paragraph>
                    It's not as expensive as you think! Learn about many ways you can save
                    and have an estimate or you personalized cost!
                  </Typography>
                  <Button variant="contained"
                    size="large" color="secondary"
                    className={classes.button}
                    component={Link} to="/questions">
                    GET STARTED
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </main>
      </React.Fragment>
    )
  }
}

const MainContentStyled = withStyles(styles)(MainContent);
export default withStyles(styles)(Landing);
