import React, { Component } from 'react';

export default class Page1 extends Component {
  componentDidMount() {
    console.log('query: ', this.props.history.location);
  }
  handleReturnApp = () => {
    this.props.history.goBack();
  };
  goNotExistRouter = () => {
    this.props.history.push('/asdjfklajsdlfkjas;lfdj');
  };
  render() {
    return (
      <div className="Page1">
        <h1>This is Page1</h1>
        <p onClick={this.handleReturnApp}>Return App</p>
        <p onClick={this.goNotExistRouter}>Go To Not Exist Router</p>
      </div>
    );
  }
}
