import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Router, Route, IndexRedirect, browserHistory} from "react-router";
import Root from "./containers/Root";
import Index from "./containers/IndexLayout";
import SignIn from "./containers/SignIn";
import store from "./redux/store";
import {Provider} from "react-redux";

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRedirect to="/index"/>
        <Route path="/index" component={Index}/>
        <Route path="/sign-in" component={SignIn}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
