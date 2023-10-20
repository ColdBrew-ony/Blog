import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";


import CenterMain from "./components/views/CenterMain/CenterMain";
import AboutPage from "./components/views/About/About";
import ProgrammingPage from "./components/views/Programming/Programming";


function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path="/Blog/" element={CenterMain()}/>
           
          <Route exact path="/Blog/About" element={AboutPage()}/>
          
          <Route exact path="/Blog/Programming" element={ProgrammingPage()}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
