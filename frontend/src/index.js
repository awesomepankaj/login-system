import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory, Redirect } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

import Login from './components/Login'

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/login' component={Login}/>
    </Route>
  </Router>
), document.getElementById('root'))

