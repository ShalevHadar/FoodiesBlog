import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Signup from './Signup'
// import Login from './Login'
import Dashboard from './Dashboard.js'
import Home from './Home.js'
import Signup from './Signup.js'
// import Navigator from './Navigator';
// import { getAuth, onAuthStateChanged } from '@firebase/auth';
// import Nav from './Nav';


function App() {
//   const [, setUser] = useState()

//   useEffect(() => {
//     const auth = getAuth();
//     onAuthStateChanged(auth, user => {
//       setUser(user);
//     })
//   })

  return (
    <div className="App" style={{paddingTop: "68px"}}>
      <BrowserRouter>
      {/* <Navigator/> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/login" component={Login} />
          
          <Route path="/dashboard" component={Dashboard} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
