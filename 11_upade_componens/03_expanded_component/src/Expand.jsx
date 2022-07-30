import React from 'react';

export default class Expand extends React.Component {
  state = {
    showContent: false,
  };

  toggleContent = () => {
    this.setState({
      showContent: !this.state.showContent,
    });
  };
  render() {
    const { showContent } = this.state;
    const { title, children } = this.props;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleContent}>
            {showContent ? (
              <i className="fas fa-chevron-down"></i>
            ) : (
              <i className="fas fa-chevron-up"></i>
            )}
          </button>
        </div>
        {!showContent ? null : <div className="expand__content">{children}</div>}
      </div>
    );
  }
}
