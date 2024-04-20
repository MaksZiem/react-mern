import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Users } from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';


function App() {
  return (
    <Router>
      {/* switch bo wybiera tylko ejdna z opcji, jakby nie to to zawsze przekierowywuje do / */}
      <Switch>
      {/* exact dlatego ze renderuje sie tylko jesli path = / */}
      <Route path="/" exact > 
        <Users />
      </Route>
      <Route path="/places/new" exact > 
        <NewPlace />
      </Route>
      {/* robi redirect do / */}
      <Redirect to="/"/> 
      </Switch> 
    </Router>
  )
}
export default App;
