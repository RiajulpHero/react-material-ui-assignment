import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/post/:postId">
          <PostDetails />
        </Route>
        <Route exact path="/">
         <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  
  );
}

export default App;
