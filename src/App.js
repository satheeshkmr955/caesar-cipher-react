import React, { Component } from "react";
import Plaintext from "./components/Plaintext";
import Ciphertext from "./components/Ciphertext";
import Shift from "./components/Shift";
import Paper from "@material-ui/core/Paper";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plainText: "",
      cipherText: "",
      shiftCount: ""
    };
  }

  encryption = (str, shiftCount) => {
    if (shiftCount < 0) return this.encryption(str, shiftCount + 26);
    let encryptedText = "";
    for (let i = 0; i < str.length; i++) {
      let character = str[i];
      if (character.match(/[a-z]/i)) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
          character = String.fromCharCode(
            ((charCode - 65 + shiftCount) % 26) + 65
          );
        } else if (charCode >= 97 && charCode <= 122) {
          character = String.fromCharCode(
            ((charCode - 97 + shiftCount) % 26) + 97
          );
        }
      }
      encryptedText += character;
    }
    return encryptedText;
  };

  decryption = (str, shiftCount) => {
    if (shiftCount < 0) return this.encryption(str, shiftCount + 26);
    let encryptedText = "";
    for (let i = 0; i < str.length; i++) {
      let character = str[i];
      if (character.match(/[a-z]/i)) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
          let checkLessThanZero =
            charCode - 65 - shiftCount < 1
              ? charCode - 65 - shiftCount + 26
              : charCode - 65 - shiftCount;
          character = String.fromCharCode(checkLessThanZero + 65);
        } else if (charCode >= 97 && charCode <= 122) {
          let checkLessThanZero =
            charCode - 97 - shiftCount < 1
              ? charCode - 97 - shiftCount + 26
              : charCode - 97 - shiftCount;
          character = String.fromCharCode(checkLessThanZero + 97);
        }
      }
      encryptedText += character;
    }
    return encryptedText;
  };

  plainTextHandler = event => {
    this.setState({
      plainText: event.target.value,
      cipherText: this.encryption(
        event.target.value,
        parseInt(this.state.shiftCount)
      )
    });
  };
  cipherTextHandler = event => {
    this.setState({
      cipherText: event.target.value,
      plainText: this.decryption(
        event.target.value,
        parseInt(this.state.shiftCount)
      )
    });
  };

  onSelectHandler = event => {
    this.setState({
      shiftCount: event.target.value,
      plainText: "",
      cipherText: ""
    });
  };

  render() {
    return (
      <div className="container">
        <center>
          <h1>Caesar's Cipher</h1>
        </center>
        <Shift
          shiftCount={this.state.shiftCount}
          onSelectHandler={this.onSelectHandler}
        />
        <Paper elevation={10} className="child-container">
          <Plaintext
            shiftCount={this.state.shiftCount}
            plainText={this.state.plainText}
            inputHandler={this.plainTextHandler}
          />
          <Ciphertext
            shiftCount={this.state.shiftCount}
            cipherText={this.state.cipherText}
            inputHandler={this.cipherTextHandler}
          />
        </Paper>
      </div>
    );
  }
}

export default Main;
