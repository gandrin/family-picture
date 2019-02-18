import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './actions.style.css';

export default class Actions extends Component {
  onClickFunctionGenerator = (move) => {
    return () => {
      return this.props.triggerMove(move);
    };
  }

  render() {
    return (
      <div className="Actions">
        {
          this.props.availableActions.map(({ identifier, move }, index) => {
            return (
              <div
                key={identifier}
                className="Action"
                onClick={this.onClickFunctionGenerator(move)}
              >
                { identifier }
              </div>
            )
          })
        }
      </div>
    );
  }
}

Actions.defaultProps = {
  availableActions: []
}

Actions.propTypes = {
  triggerMove: PropTypes.func,
  availableActions: PropTypes.arrayOf(PropTypes.shape({
    move: PropTypes.func,
    identifier: PropTypes.string
  })),
}
