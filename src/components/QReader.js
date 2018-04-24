import React, {Component} from 'react';
import QrReader from 'react-qr-reader';
import withAuthorization from './withAuthorization';
import {db, firebase} from '../firebase';

class QReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: 'No result',
    };
    this.handleScan = this.handleScan.bind(this);
  }

  handleScan(data) {
    if (data) {
      this.setState({
        result: data,
      });

      firebase.auth.onAuthStateChanged((authUser) => {
        db.addUserScan(authUser.uid, data);
      });
    }
  }

  handleError(err) {

  }

  render() {
    return (
      <div className="qr-scanner-wrapper">
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{width: '100%'}}
        />
        <div className="scan-result">
          <p>
            Result: <a href={this.state.result}>{this.state.result}</a>
          </p>
        </div>
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(QReader);
