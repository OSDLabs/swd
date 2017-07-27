import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Search.css';
import { gql, graphql, withApollo } from 'react-apollo';

import { gql, graphql } from 'react-apollo';
// import FlatButton from 'material-ui/FlatButton';
// import TextField from 'material-ui/TextField';

import s from './Search.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

// create the query to get the search results
const searchQuery = gql`
  query(
    $Name: String
    $ID: String
    $Hostel: String
    $Room: String
    $Branch: String
  ) {
    student(
      Name: $Name
      ID: $ID
      Hostel: $Hostel
      Room: $Room
      Branch: $Branch
    ) {
      id
      name
      hostel {
        hostelName
        hostelRoom
      }
    }
  }
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: {        // Search query
        Name: null,
        ID: null,
        Room: null,
        Branch: null,
        Hostel: null,
      },
      results: null, // Populates the results of the query
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  // gets the serach queries from SerachBar
  handleSearch(query, event) {

    event.preventDefault();

    this.setState({ query });

    // Query Graphql
    this.props.client.query({
      query: searchQuery,
      variables: query,
    }).then((results)=>{
      this.setState({ results })
    });

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
          {
            this.state.results && 
            (this.state.results.networkStatus==7 && <SearchResults results={this.state.results.data.student} />)
          }
        </div>
      </div>
    );
  }
}


// create higher order graphql class with apollo-client
const SearchWithApollo = withApollo(Search);

export default withStyles(s)(SearchWithApollo);
