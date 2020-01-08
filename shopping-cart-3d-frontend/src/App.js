import React from 'react';
import { Switch } from 'react-router-dom'
import Header from './components/Header';
import PrivateRoute from './components/routes/PrivateRoute';
import { connect } from 'react-redux'
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    const role = this.props.user.role
    console.log(role)
    return (
      <>
        <Header />
        <Switch>
          <PrivateRoute  role={role}/>
        </Switch>
        {/* <Footer/> */}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(App)