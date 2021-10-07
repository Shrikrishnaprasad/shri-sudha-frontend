import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

<<<<<<< HEAD
// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import RegisterPage from "views/RegisterPage/RegisterPage";
import SubscribePage from "views/SubscribePage/SubscribePage";
import AdminMain from "views/AdminPage/AdminMain";
=======
import { AppProvider } from "components/ContextApi/context";
import App from "components/App/App";
>>>>>>> 34f949ac022412521758d10afb2fab6b1a010171

var hist = createBrowserHistory({
  basename: "/new",
});

ReactDOM.render(
<<<<<<< HEAD
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/contact" component={ProfilePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/subscribe" component={SubscribePage} />
      <Route path="/admin" component={AdminMain} />
    </Switch>
  </Router>,
=======
  <AppProvider>
    <Router history={hist}>
      <App />
    </Router>
  </AppProvider>,
>>>>>>> 34f949ac022412521758d10afb2fab6b1a010171
  document.getElementById("root")
);
