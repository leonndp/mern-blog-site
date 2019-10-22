import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ArticlesList from './components/ArticlesList';
import NewArticle from './components/NewArticle';
import EditArticle from './components/EditArticle';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ArticlesList} />
        <Route path="/new" exact component={NewArticle} />
        <Route path="/:id/edit" exact component={EditArticle} />
      </div>
  );
}

export default App;
