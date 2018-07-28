import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class OnlyGuestRoute extends Component {
  render() {
    return (
      (this.props.isLogged == false)
      ? this.props.children 
      : <Redirect to='/app/' />
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.user.isLogged
  }
}

export default connect(mapStateToProps)(OnlyGuestRoute);