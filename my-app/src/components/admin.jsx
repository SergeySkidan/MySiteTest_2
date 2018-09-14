import React, { Component } from 'react';

import Login from './login';


export default class Admin extends React.Component {
  const Admin = () => AppState.loggedIn ?
                      <h1>Admin Component</h1> :
                      <Redirect to="/login" />;
    constructor( props ) {
        super( props );
    }
    logout() {
        AppState.logout();
        this.props.history.replace( '/login' );
    }
    render() {
        return (
            AppState.loggedIn ? (
                <div>
                    <h1>Admin Component</h1>
                    <button
                    onClick={ this.logout.bind(this) }>
                    Logout</button>
                </div>
            ) : <Redirect to="/login" />
        );
    }
}
