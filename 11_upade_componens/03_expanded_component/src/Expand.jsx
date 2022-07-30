import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

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
              <FontAwesomeIcon icon={faArrowUp} />
            ) : (
              <FontAwesomeIcon icon={faArrowDown} />
            )}
          </button>
        </div>
        {!showContent ? null : <div className="expand__content">{children}</div>}
      </div>
    );
  }
}
