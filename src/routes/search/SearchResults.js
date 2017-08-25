import React, { PropTypes } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class SearchResults extends React.Component {
  static propTypes = {
    results: PropTypes.array.isRequired,
  }

  render() {
    const results = this.props.results;
    if (results.length < 800) {
      return (
        <div>
          <Table
            fixedHeader
            selectable={false}
            multiSelectable={false}
          >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn tooltip="ID">ID</TableHeaderColumn>
                <TableHeaderColumn tooltip="Name">Name</TableHeaderColumn>
                <TableHeaderColumn tooltip="Hostel">Hostel</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              showRowHover
            >
              {/* Map the results to a table */}
              {results.map(row => (
                <TableRow key={row.id}>
                  <TableRowColumn>{row.id}</TableRowColumn>
                  <TableRowColumn>{row.name}</TableRowColumn>
<<<<<<< HEAD
                  <TableRowColumn>{row.hostel.hostelName}{row.hostel.hostelRoom}</TableRowColumn>
=======
                  <TableRowColumn>{row.hostel.hostelName}                                                                                                                          {row.hostel.hostelRoom}</TableRowColumn>
>>>>>>> 463f076... Removed some console errors
                </TableRow>
                    ))}
            </TableBody>
          </Table>
        </div>
      );
    }
    return (<p>Overflow</p>);
  }

}

export default SearchResults;
