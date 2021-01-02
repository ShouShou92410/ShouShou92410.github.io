import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import PersonalWebsite from './personal-website/PersonalWebsite';

function Content() {
  return (
    <Switch>
      <Route path="/tourist-tracker">
        <h1>tourist-tracker</h1>
      </Route>
      <Route path="/footprints">
        <h1>Footprints</h1>
      </Route>
      <Route path="/jpn-vocab-quiz">
        <h1>JPNVocabQuiz</h1>
      </Route>
      <Route path="/personal-website">
        <PersonalWebsite />
      </Route>
      <Route path="/">
        <PersonalWebsite />
      </Route>
    </Switch>
  );
}

export default Content;
