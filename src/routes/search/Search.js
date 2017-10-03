import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { gql, graphql } from 'react-apollo';
// import FlatButton from 'material-ui/FlatButton';
// import TextField from 'material-ui/TextField';

import s from './Search.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: {
        Name: null,
        ID: null,
        Room: null,
        Branch: null,
        Hostel: null,
      },
      fetch: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query) {
    // gets the serach queries from SerachBar
    if (!this.state.fetch) this.setState({ fetch: true });

    this.setState({ query });
    this.props.data.refetch(query);
  }


  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>
            {this.props.title}
          </h1>
          {/* handleSearch() creates a Parent -> Child communication */}
          <SearchBar onUserSearch={this.handleSearch} />
          <br />
          {this.props.data.student && this.state.fetch
            ? <SearchResults results={this.props.data.student} />
            : <p>No results...</p>
          }
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

// create the query to get the search results
const searchQuery = gql`
  query(
    $studentName: String
    $bitsId: String
    $hostel: String
    $hostelRoom: String
    $branch: String
  ) {
    student(
      studentName: $studentName
      bitsId: $bitsId
      hostel: $hostel
      hostelRoom: $hostelRoom
      branch: $branch
    ) {
      bitsId
      studentName
      hostel {
        hostelName
        hostelRoom
      }
    }
  }
`;

// create higher order graphql class with searchQuery
const SearchWithData = graphql(searchQuery, {
  options: {
    variables: {
      studentName: null,
      bitsId: null,
      hostelRoom: null,
      branch: null,
      hostel: null,
    },
  },
})(Search);

export default withStyles(s)(SearchWithData);
