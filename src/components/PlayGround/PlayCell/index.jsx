/** Absolute imports */
import React from 'react';

/** Styles */
import './index.scss';

export default class PlayCell extends React.PureComponent {

  render() {
    const {onCellClick, status} = this.props;
    return (
      <div className={`PlayCell ${status}`} onClick={onCellClick}/>
    )
  }
}
