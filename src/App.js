import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";


import Layout from "./components/views/Layout/layout";
import AboutPage from "./components/views/About/About";
import ProgrammingPage from "./components/views/Programming/Programming";
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    // <Router>
    //   <div>
    //     {/* A <Switch> looks through its children <Route>s and
    //       renders the first one that matches the current URL. */}
    //     <Routes>
    //       <Layout/>
    //     {/*
    //       <Route exact path="/Blog/" element={Layout()}/>
    //       임시 작업중            
    //       <Route exact path="/Blog/About" element={AboutPage()}/>
          
    //       <Route exact path="/Blog/Programming" element={ProgrammingPage()}/>
    //        */}
    //     </Routes>
    //   </div>
    // </Router>
    <div>
      <ChakraProvider>
        <Layout/>
      </ChakraProvider>

    </div>
  );
}

export default App;
