import React from "react";
import { Route, Switch } from "react-router-dom";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import RegisterPage from "views/RegisterPage/RegisterPage";
import SubscribePage from "views/SubscribePage/SubscribePage";
import FounderPage from "views/FounderPage/FounderPage";
import DashboardPage from "views/DashboardPage/DashboardPage";

import AdminMain from "views/AdminPage/AdminMain";
// import Support from "views/AdminPage/SupportPage/Support";
// import Report from "views/AdminPage/ReportPage/Report";
//import { useGlobalContext } from "components/ContextApi/context";

const App = () => {
  //const {URL} = useGlobalContext()
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/contact" component={ProfilePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/subscribe" component={SubscribePage} />
      <Route exact path="/founder" component={FounderPage} />

      <Route exact path="/dashboard" component={DashboardPage} />

      <Route path="/admin" component={AdminMain} />
      {/* admin routes */}
      {/* <Route exact path="/admin" component={AdminMain} />
      <Route exact path="/admin/support" component={Support} />
      <Route exact path="/admin/report" component={Report} /> */}
    </Switch>
  );
};

export default App;
