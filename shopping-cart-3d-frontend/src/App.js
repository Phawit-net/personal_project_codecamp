import React from 'react';
import FirstPage from './pages/FirstPage';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import MainPage from './pages/MainPage';
import AddPage from './pages/AddPage';
import PrivateRoute from './components/routes/PrivateRoute';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        {/* <PrivateRoute/> */}
        <Route exact path="/" component={FirstPage} />
        <Route path="/Main" component={MainPage} />
        <Route exact path="/Add" component={AddPage} />
        <Route path="/Detail" component={DetailPage} />
      </Switch>
    </>
  );
}

export default App;
