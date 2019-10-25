import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import ArticlesList from './components/ArticlesList';
import NewArticle from './components/NewArticle';
import ViewArticle from './components/ViewArticle';
import EditArticle from './components/EditArticle';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Switch>
          <Route path="/" exact component={ArticlesList} />
          <Route path="/new" exact component={NewArticle} />
          <Route path="/view/:id" exact component={ViewArticle} />
          <Route path="/edit/:id" component={EditArticle} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
