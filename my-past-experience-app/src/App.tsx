import React from 'react';
import Container from 'react-bootstrap/Container';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MainMenu from './components/MainMenu';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import WarriorPathContainer from './components/WarriorPathContainer';
import PersonalityPathContainer from './components/PersonalityPathContainer';
import HumanPathContainer from './components/HumanPathContainer';
function App() {
  return (<div className="App">
    <Container fluid className="h-100 min-vh-100">
      <Container className="h-100 d-flex flex-column justify-content-between">
        <MainMenu />
        <Switch>
          <Route exact path='/'
            render={() => <Redirect to={'/main-page'} />} />
          <Route path='/main-page' render={() => <MainPage />} />
          <Route path='/warrior-path-page' render={() => <WarriorPathContainer />} />
          <Route path='/personality-path-page' render={() => <PersonalityPathContainer />} />
          <Route path='/man-path-page' render={() => <HumanPathContainer />} />
          <Route render={() => <div>404 Page not found, sorry</div>} />
        </Switch>
        <Footer />
      </Container>
    </Container>
  </div>
  );
}

export default App;
