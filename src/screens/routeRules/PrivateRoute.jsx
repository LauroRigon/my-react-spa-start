import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    return (
      (this.props.isLogged == true)
      ? this.props.children 
      : <Redirect to={{ pathname: '/auth/login', state: { from: this.props.location } }} />
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.user.isLogged
  }
}

export default connect(mapStateToProps)(PrivateRoute);