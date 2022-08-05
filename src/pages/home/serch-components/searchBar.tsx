import React from 'react';
import NameForm from './formSearch';

export default class SearchAppBar extends React.Component {
  render() {
    return (
      <div>
        <div>{React.createElement(NameForm, null)}</div>
      </div>
    );
  }
}
