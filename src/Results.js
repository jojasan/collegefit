import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SimpleSelect from './SimpleSelect.js'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import schoolsDB from './Engine/SchoolsDB';

const schoolOptions = schoolsDB.getSchoolList();

const styles = theme => ({
  root: {
  },
  table: {
    'table-layout': 'fixed',
  },
  button: {
  },
  cell: {
    width: '100px',
  },
});

class Results extends React.Component {

  prepareTableData = (rawResults) => {
    const results = []
    results[0] = {
      id: 1,
      rowConcept: 'Cost of Attendance',
      school1: rawResults[0].totalCOA,
      school2: rawResults[1].totalCOA,
      school3: rawResults[2].totalCOA,
    };
    results[1] = {
      id: 2,
      rowConcept: 'Federal Aid',
      school1: rawResults[0].federalAid,
      school2: rawResults[1].federalAid,
      school3: rawResults[2].federalAid,
    };
    results[2] = {
      id: 3,
      rowConcept: 'State Aid',
      school1: rawResults[0].stateAid,
      school2: rawResults[1].stateAid,
      school3: rawResults[2].stateAid,
    };
    results[3] = {
      id: 4,
      rowConcept: 'Private Aid',
      school1: rawResults[0].privateAid,
      school2: rawResults[1].privateAid,
      school3: rawResults[2].privateAid,
    };
    results[4] = {
      id: 5,
      rowConcept: 'EFC',
      school1: rawResults[0].efc,
      school2: rawResults[1].efc,
      school3: rawResults[2].efc,
    };
    results[5] = {
      id: 6,
      rowConcept: 'ROI',
      school1: rawResults[0].roi,
      school2: rawResults[1].roi,
      school3: rawResults[2].roi,
    };
    return results;
  };

  render() {
    const { classes, inputs, changeHandler, results, emailFn } = this.props;
    const tableResults = this.prepareTableData(results);
    return (
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
                <TableCell>
                  <SimpleSelect
                    options={schoolOptions}
                    labelText="School 1"
                    selectedItem={inputs.schoolCompare1}
                    changeHandler={changeHandler('schoolCompare1')}
                  />
                </TableCell>
                <TableCell>
                  <SimpleSelect
                    options={schoolOptions}
                    labelText="School 2"
                    selectedItem={inputs.schoolCompare2}
                    changeHandler={changeHandler('schoolCompare2')}
                  />
                </TableCell>
                <TableCell>
                  <SimpleSelect
                    options={schoolOptions}
                    labelText="School 3"
                    selectedItem={inputs.schoolCompare3}
                    changeHandler={changeHandler('schoolCompare3')}
                  />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableResults.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">{row.rowConcept}</TableCell>
                  <TableCell align="right" className={classes.cell}>{row.school1}</TableCell>
                  <TableCell align="right" className={classes.cell}>{row.school2}</TableCell>
                  <TableCell align="right" className={classes.cell}>{row.school3}</TableCell>
                </TableRow>
              ))}
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
                  <TableCell align="right">{results[0].totalCOA}</TableCell>
                  <TableCell align="right">{results[0].federalAid + results[0].stateAid + results[0].privateAid}</TableCell>
                  <TableCell align="right">{results[0].efc}</TableCell>
                  <TableCell align="right">{results[0].roi}</TableCell>
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
          <Button onClick={emailFn} variant="contained"
            color="primary" className={classes.button}>
            Email Report
          </Button>

      </React.Fragment>
    );
    }
}

export default withStyles(styles)(Results);
