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
    if (results) {
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
                <TableHeaderColumn tooltip="Hostel">Location</TableHeaderColumn>
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
                  <TableRowColumn>{row.location}</TableRowColumn>
                </TableRow>
                    ))}
            </TableBody>
          </Table>
        </div>
      );
    }

    return (<p>No Results</p>);
  }

}

export default SearchResults;
