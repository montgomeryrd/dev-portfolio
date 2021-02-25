import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './screens/Home';
import About from './screens/About';
import Projects from './screens/Projects';
import SinglePost from './screens/SinglePost';
import Posts from './screens/Posts';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/posts:slug" />
        <Route component={Posts} path="/posts" />
        <Route component={Projects} path="/projects" />
      </Switch>
    </Router>
  );
}

export default App;