import React, { Component } from 'react'
import * as allRoutes from './index'
import rolesConfig from '../../config/role'
import { Route, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

class PrivateRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allowedRoutes: []
    }
  }

  componentDidMount() {
    const isToken = localStorage.getItem("ACCESS_TOKEN")
    // let role = this.props.role
    if (isToken) {
        this.setState({
            allowedRoutes: rolesConfig["user"].routes
        })
    } else {
        this.setState({
            allowedRoutes: rolesConfig["guest"].routes
        })
        // ,() =>{
        //   this.props.history.push('/');
        // })
    }
  }

  render() {
    return (
      <>
        {this.state.allowedRoutes.map(route =>
          < Route
            exact path={route.url}
            component={allRoutes[route.component]}
            key={route.url}
          />
        )}
        {/* {this.props.role == "guest" ? <Redirect to='/login' /> : null} */}
      </>
    )
  }
}

export default withRouter(PrivateRoute);