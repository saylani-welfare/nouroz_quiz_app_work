
//** Other **// 
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Store from './store/store.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//** Student Component **// 
import { App } from './containers/app.js';
import { MainPage } from './containers/mainPage.js';

//** Admin Components **/
import { AdminPanel } from '../src/containers/adminPanel/adminPanel.js'
import { AdminLogin } from '../src/containers/adminPanel/adminLogin.js'
import { Dashboard } from '../src/containers/adminPanel/dashboard.js'
import { CreateQuiz } from '../src/containers/adminPanel/createQuiz.js'
import { CreateCourse } from '../src/containers/adminPanel/createCourse.js'
import { CreateProgram } from '../src/containers/adminPanel/createProgram.js'
import { CreateBatch } from '../src/containers/adminPanel/createBatch.js'


ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={Store}>
      <Router history={browserHistory}>

        <Route path='/' component={App}>
          <IndexRoute component={MainPage} />
        </Route>

        <Route path='/admin' component={AdminLogin} />

        <Route path='/admin/adminpanel' component={AdminPanel}>
          <IndexRoute component={Dashboard} />
          <Route path='/admin/dashboard' component={Dashboard} />
          <Route path='/admin/createProgram' component={CreateProgram} />
          <Route path='/admin/createCourse' component={CreateCourse} />
          <Route path='/admin/createBatch' component={CreateBatch} />
          <Route path='/admin/createquiz' component={CreateQuiz} />
        </Route>

      </Router>
    </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById("root")
);
