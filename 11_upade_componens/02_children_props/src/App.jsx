import React from 'react';
import Dialog from './Dialog';

export default class App extends React.Component {
  state = {
    isOpen: false,
  };

  openDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  closeDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.openDialog}>
          Show dialog
        </button>
        <Dialog title="Recommendation" onClose={this.closeDialog} isOpen={this.state.isOpen}>
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    );
  }
}
