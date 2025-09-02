import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Homepage from './Homepage.js';
// import Shows from './Shows.js';
import Talenthunt from './Talenthunt';
import Classical from './Classical';
import Lightwestern from './Lightwestern';
import Media from './Media';
import Mixing from './Mixing';
import OtherInstruments from './OtherInstruments.js';

import ReactGA from 'react-ga';

ReactGA.initialize('UA-221882998-1');

// Custom hook to track page views
function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);
}

function AppRoutes() {
  usePageTracking();

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/shows" element={<Shows />} /> */}
      <Route path="/talenthunt" element={<Talenthunt />} />
      <Route path="/talenthunt/classical" element={<Classical />} />
      <Route path="/talenthunt/light-western" element={<Lightwestern />} />
      <Route path="/talenthunt/media" element={<Media />} />
      <Route path="/talenthunt/mixing" element={<Mixing />} />
      <Route path="/talenthunt/other-instruments" element={<OtherInstruments />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
