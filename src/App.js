import React, { useState, useMemo } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// layouts
import Authenticated from "layouts/Authenticated.js";
import NotAuthenticated from "layouts/NotAuthenticated.js";
import Utilities from "layouts/Utilities.js";
import jwtDecode from 'jwt-decode';

// views without layouts
import Landing from "views/landing/index.js"; 
import Lost from "views/Lost.js";

import SharedContext from './SharedContext';

const App = () => {

  const handleSession = () => {

    const localToken = localStorage.getItem('uid');
    let returnValue = {
      apiURL: "https://ctp-puntarenas-api.herokuapp.com/api",
      data: {},
      privileges: [],
      logged: false
    }

    if (localToken) {
      const decodedData = jwtDecode(localToken);
      returnValue = {
        apiURL: "https://ctp-puntarenas-api.herokuapp.com/api",
        data: decodedData.user,
        privileges: decodedData.privileges.map(priv => priv.name),
        logged: true
      }
    }
    return returnValue

  }

  const [ user, setUser ] = useState(handleSession())
  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <SharedContext.Provider value={value} >
      <BrowserRouter>
        <Switch>
      
            {/* add routes with layouts */}
            <Route path="/attendance" component={Authenticated} />
            <Route path="/comunication" component={Authenticated} />
            <Route path="/home" component={Authenticated} />
            <Route path="/privileges" component={Authenticated} />
            <Route path="/reports" component={Authenticated} />
            <Route path="/users" component={Authenticated} />

            <Route path="/landing" component={NotAuthenticated} />
            <Route path="/utilities" component={Utilities} />

            {/* add routes without layouts */}
            <Route path="/" exact component={Landing} />
            
            {/* add redirect to Lost if 404 or not especified */}
            <Route from="*" to="/Lost" component={Lost} />

        </Switch>
      </BrowserRouter>
    </SharedContext.Provider>
  );

}

export default App