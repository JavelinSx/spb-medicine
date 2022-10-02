
import {Route, Switch} from 'react-router-dom'
import { useState, useEffect } from 'react';

import Pacients  from "./Pacients";
import Register from './Register'
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import PacientCard from './PacientCard';
function App() {
  const [loggedIn, setLoggedIn] = useState(true)
  const [bearer, setBearer] = useState(true)
  return (
    <div className='page'>
      <Switch>
        <ProtectedRoute
          exact path='/admin'
          loggedIn={loggedIn}
          bearer={bearer}
          component={Pacients}>
        </ProtectedRoute>
        <ProtectedRoute
          exact path='/card'
          loggedIn={loggedIn}
          bearer={bearer}
          component={PacientCard}>
        </ProtectedRoute>
        <Route path='/sign-in'>
          <Login></Login>
        </Route>
        <Route path='/sign-up'>
          <Register></Register>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
