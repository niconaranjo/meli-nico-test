import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.module.css';

import Layout from './layout/layout';
import ContentController from
  './controllers/contentController/contentController';
import SectionHandler from './components/sectionHandler/sectionHandler';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={SectionHandler} />
          <Route path="/items" exact component={ContentController} />
          <Route path="/items/:id" exact component={ContentController} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
