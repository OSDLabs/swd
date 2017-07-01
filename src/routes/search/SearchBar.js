import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const hostels = ['AH1', 'AH2', 'AH3', 'AH4', 'AH5', 'AH6', 'AH7', 'AH8', 'AH9', 'CH1', 'CH2', 'CH3', 'CH4', 'CH5', 'CH6'];

const branches = [
  { value: 'A1', name: 'Chemical' },
  { value: 'A3', name: 'EEE' },
  { value: 'A4', name: 'Mechanical' },
  { value: 'A7', name: 'Computer Science' },
  { value: 'A8', name: 'ENI' },
  { value: 'B1', name: 'MSc Biology' },
  { value: 'B2', name: 'MSc Chemistry' },
  { value: 'B3', name: 'MSc Economics' },
  { value: 'B4', name: 'MSc Mathematics' },
  { value: 'B5', name: 'MSc Physics' },
];

class SearchBar extends React.Component {
  static propTypes = {
        // fucntion to pass back queries to parent
    onUserSearch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      Name: null,
      ID: null,
      Room: null,
      Branch: null,
      Hostel: null,
    };
  }


  setTextField(name, e, val) {
    const update = {};
    update[name] = val;
    this.setState(update);
  }

  setSelectField(name, e, index, val) {
    const update = {};
    update[name] = val;
    // can't set it directly as {name:val}
    this.setState(update);
  }

  getItems(values, keys = false) {
        // returns Select field items acc to the values sent
    return values.map(el => (
      <MenuItem
        key={keys ? el.value : el}
        value={keys ? el.name : el}
        primaryText={keys ? el.name : el}
      />
        ));
  }
  render() {
        // basic search form
        // TODO: Validation so that atleast one of the fields are no empty on submit

    return (
      <form className="searchbar">
        <TextField
          floatingLabelText="Name"
          underlineStyle={{ display: 'none' }}
          onChange={this.setTextField.bind(this, 'Name')}
        />

        <TextField
          floatingLabelText="ID No"
          underlineStyle={{ display: 'none' }}
          onChange={this.setTextField.bind(this, 'ID')}
        />

        <br />

        <SelectField
          onChange={this.setSelectField.bind(this, 'Hostel')}
          floatingLabelText="Hostel"
          value={this.state.Hostel}
          autoWidth
        >
          {this.getItems(hostels)}
        </SelectField>

        <br />

        <TextField
          floatingLabelText="Room No"
          underlineStyle={{ display: 'none' }}
          onChange={this.setTextField.bind(this, 'Room')}
        />

        <br />

        <SelectField
          onChange={this.setSelectField.bind(this, 'Branch')}
          floatingLabelText="Branch"
          value={this.state.Branch}
          autoWidth
        >
          {this.getItems(branches, true)}
        </SelectField>

        <br />

        <FlatButton
          label="Search"
          primary
          onTouchTap={e => this.props.onUserSearch(this.state, e)}
        />
      </form>
    );
  }
}


export default SearchBar;
