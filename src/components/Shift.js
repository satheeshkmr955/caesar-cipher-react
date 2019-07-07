import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


class Shift extends Component {

  render() {
    return (
      <div className="shift">
        <center>
          <Select
            autoWidth={true}
            displayEmpty
            onChange={this.props.onSelectHandler}
            value={this.props.shiftCount}>
            <MenuItem value="" disabled>Enter shift amount</MenuItem>
            <MenuItem value="0">0</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="7">7</MenuItem>
            <MenuItem value="8">8</MenuItem>
            <MenuItem value="9">9</MenuItem>
            <MenuItem value="10">10</MenuItem>
          </Select>
        </center>
      </div>
    );
  }
  
};

Shift.propTypes = {
  onSelectHandler: PropTypes.func,
  shiftCount:PropTypes.string
};

export default Shift;