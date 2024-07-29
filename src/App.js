import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import News from './Components/News';
import './App.css';


function App() {

   
   let apikey = process.env.REACT_APP_NEWS_API_KEY;
  return (
    <div className="App">
     
      <BrowserRouter>
      <header className="App-header mb-16">
        <Navbar />
      </header>
      
        <Routes>
          <Route exact path="/" element={<News apikey={apikey} key={"general"} pageSize={10} country="in" category="general" />} />
          <Route exact path="/technology" element={<News apikey={apikey} key={"technology"} pageSize={10} country="in" category="technology" />} />
          <Route exact path="/sports" element={<News apikey={apikey} key={"sports"} pageSize={10} country="in" category="sports" />} />
          <Route exact path="/science" element={<News apikey={apikey} key={"science"} pageSize={10} country="in" category="science" />} />
          <Route exact path="/health" element={<News apikey={apikey} key={"health"} pageSize={10} country="in" category="health" />} />
          <Route exact path="/general" element={<News apikey={apikey} key={"general"} pageSize={10} country="in" category="general" />} />
          <Route exact path="/entertainment" element={<News apikey={apikey} key={"entertainment"} pageSize={10} country="in" category="entertainment" />} />
          <Route exact path="/business" element={<News apikey={apikey} key={"business"} pageSize={10} country="in" category="business" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
