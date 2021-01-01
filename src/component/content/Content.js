import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Content() {
  return (
    <main>
      <Card className="content-card">
        <Switch>
          <Route path="/tourist-tracker">
            <h1>tourist-tracker</h1>
          </Route>
          <Route path="/Footprints">
            <h1>Footprints</h1>
          </Route>
          <Route path="/JPNVocabQuiz">
            <h1>JPNVocabQuiz</h1>
          </Route>
          <Route path="/PersonalSite">
            <h1>PersonalSite</h1>
          </Route>
          <Route path="/">
            <h1>PersonalSite</h1>
          </Route>
        </Switch>
      </Card>
    </main>
  );
}

export default Content;
