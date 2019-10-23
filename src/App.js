import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import ArticlesList from './components/ArticlesList';
import NewArticle from './components/NewArticle';
import ViewArticle from './components/ViewArticle';
import EditArticle from './components/EditArticle';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Switch>
          <Route path="/" exact component={ArticlesList} />
          <Route path="/new" exact component={NewArticle} />
          <Route path="/:id" exact component={ViewArticle} />
          <Route path="/:id/edit" component={EditArticle} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
