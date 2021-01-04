import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import PersonalWebsite from './personal-website/PersonalWebsite';
import TouristTracker from './tourist-tracker/TouristTracker';
import Footprints from './footprints/Footprints';
import JPNVocabQuiz from './jpn-vocab-quiz/JPNVocabQuiz';

function Content() {
  return (
    <Switch>
      <Route path="/tourist-tracker">
        <TouristTracker />
      </Route>
      <Route path="/footprints">
        <Footprints />
      </Route>
      <Route path="/jpn-vocab-quiz">
        <JPNVocabQuiz />
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
