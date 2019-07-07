import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';


class Ciphertext extends Component {

    render() {
        return (
      <div className="right">
        <center>
          <h2>Ciphertext</h2>
          <TextField
            multiline
            rowsMax="10"
            margin="normal"
            placeholder="Enter ciphertext"
            onChange={this.props.inputHandler}
            value={this.props.cipherText}
            disabled={this.props.shiftCount===""?true:false}
          />
        </center>
      </div>);
    }
}

Ciphertext.propTypes = {
  inputHandler: PropTypes.func,
  shiftCount: PropTypes.string,
  cipherText: PropTypes.string
};

export default Ciphertext;
