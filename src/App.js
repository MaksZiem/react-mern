import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Users } from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

function App() {
  return (
    <Router>
      {/* switch bo wybiera tylko ejdna z opcji, jakby nie to to zawsze przekierowywuje do / */}
      <MainNavigation />
      <main>
        <Switch>
          {/* exact dlatego ze renderuje sie tylko jesli path = / */}
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          {/* robi redirect do / */}
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}
export default App;
