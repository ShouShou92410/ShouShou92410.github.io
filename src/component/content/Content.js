import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import PersonalWebsite from './personal-website/PersonalWebsite';
import TouristTracker from './tourist-tracker/TouristTracker';

function Content() {
  return (
    <Switch>
      <Route path="/tourist-tracker">
        <TouristTracker />
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
