import React from "react";
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Footer from "./Components/Footer/Index";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
