
import Homepage from './Homepage.js';
// import Shows from './Shows.js';
import Talenthunt from './Talenthunt';
import Classical from './Classical';
import Lightwestern from './Lightwestern';
import Media from './Media';
import React from 'react';
import Mixing from './Mixing';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { createBrowserHistory } from "history";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-221882998-1');

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
})

function App() {

  return (
    <div>
      <Router history={history}>
          <Routes>
              <Route path="/" element = {<Homepage />}/>
              {/* <Route path="/Shows" element={<Shows />}/> */}
              <Route path="/Talenthunt" element={<Talenthunt />}/>
              <Route path="/Talenthunt/Classical" element={<Classical />}/>
              <Route path="/Talenthunt/Light&Western" element={<Lightwestern />}/>
              <Route path="/Talenthunt/Media" element={<Media />}/>
              <Route path="/Talenthunt/Mixing" element={<Mixing />}/>
              <Route path="*" element={<Navigate replace to="/" />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
