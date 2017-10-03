import React, { PropTypes } from 'react';
import { gql, withApollo } from 'react-apollo';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Search.css';


import SearchBar from './SearchBar';
import SearchResults from './SearchResults';


// create the query to get the search results
const searchQuery = gql`
  query(
    $Name: String
    $ID: String
  ) {
    student(
      name: $Name
      id: $ID
    ) {
      id
      name
      location
    }
  }
`;

class Search extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired,
  };

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
  }

  // gets the serach queries from SerachBar
  handleSearch(query, event) {
    event.preventDefault();

    this.setState({ query });

    // Query Graphql
    this.props.client.query({
      query: searchQuery,
      variables: query,
    }).then((results) => {
      this.setState({ results });
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
          <SearchBar onUserSearch={this.handleSearch.bind(this)} />
          <br />
          {
            this.state.results &&
            (this.state.results.networkStatus === 7 &&
              <SearchResults results={this.state.results.data.student} />)
          }
        </div>
      </div>
    );
  }
}


// create higher order graphql class with apollo-client
const SearchWithApollo = withApollo(Search);

export default withStyles(s)(SearchWithApollo);
