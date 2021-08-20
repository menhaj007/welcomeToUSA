import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import PostContainer from './PostContainer';
import Comment from './Comment';
import PDFLinks from './PDFLinks';
import SocialServices from './SocialServices';
import Healthcare from './Healthcare';
import TransportationGuide from './TransportationGuide';
function App() {
  return (
    <Router>
      <NavBar />
        <Switch>

          <Route exact path="/posts/:id" component={Comment} />
          {/* /new-comments/"+id */}
          <Route exact path="/new-comments/:id" component={Comment} />
          <Route exact path="/posts" component={PostContainer}/>
          <Route exact path="/esol" component={PDFLinks}/>
          <Route exact path="/social-services" component={SocialServices}/>
          <Route exact path="/healthcare" component={Healthcare}/>
          <Route exact path="/transportation-guide" component={TransportationGuide}/>
          
          <Route exact path="/" component={PostContainer}/>
        </Switch>

    </Router>
  );
}

export default App;
