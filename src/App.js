// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Forum from './components/Forum';
import { useAuth } from "./hooks/useAuth.js";

class App extends Component {
    render() {
      return (
      <Router>
          <div>
            <h2>Welcome to React Router Tutorial</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
              <li><Link to={'/forum'} className="nav-link">Forum</Link></li>
            </ul>
            </nav>
            <hr />
            <Routes>
                <Route exact path='/' component={Home} />
                <Route path='/forum' component={Forum} />
                <Route path='/about' component={About} />
            </Routes>
          </div>
        </Router>
      );
    }
  }

// function App() {
//   const { user, signout, signInWithGoogle } = useAuth();
//   return (
//     <div>
//       {user ? (
//         <button onClick={signout}>Sign out</button>
//       ) : (
//         <>
//           <button onClick={signInWithGoogle}>Login with Google</button>
//         </>
//       )}
//     </div>
//   );
// }

export default App;
