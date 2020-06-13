import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Estilos:
import '../stylesheets/App.scss';

// Componentes:
import LandingPage from './LandingPage'
import Comparator from './Comparator';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  } 

  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/compare" component={Comparator} />
        </Switch>

      </div>
    );
  }
}