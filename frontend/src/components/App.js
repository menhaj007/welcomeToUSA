import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import PostContainer from './PostContainer';
import Comment from './Comment';
function App() {
  return (
    <Router>
      <NavBar />
        <Switch>

          <Route exact path="/posts/:id" component={Comment} />
          <Route exact path="/posts" component={PostContainer}/>
          
          <Route exact path="/" component={PostContainer}/>
        </Switch>

    </Router>
  );
}

export default App;
