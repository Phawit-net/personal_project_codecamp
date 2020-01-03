import React from 'react';
import FirstPage from './pages/FirstPage';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import MainPage from './pages/MainPage';
import AddPage from './pages/AddPage';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route path="/Main" component={MainPage} />
        <Route exact path="/add" component={AddPage} />
      </Switch>
    </>
  );
}

export default App;
