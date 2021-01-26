import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.less';
import Article from './components/blog/Article';
import Blog from './components/blog/Blog';
import Contacts from './components/contacts/Contacts';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Nav from './components/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';

const App: React.FC = (): JSX.Element => {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route path="/blog/:topicId">
            <Article />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
