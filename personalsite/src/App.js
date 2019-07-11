import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// ---- PAGES


// ---- CONTEXT


// ---- CSS
import './App.css';


class App extends Component {

  state = {
    user: null
  }

  componentDidMount() {
     
  }

  componentWillUnmount(){
  }


  render() {
    return (
      <HashRouter>
          <Switch>
              <Route path='/' exact component={  } />
              <Route component={Error404}/>
            </Switch>
      </HashRouter>
    );
  }
}

export default App;

