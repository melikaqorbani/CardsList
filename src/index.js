import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import VendorsList from "./components/vendorslist/VendorsList";

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/vendorslist" element={<VendorsList />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
    <App />,document.getElementById('root')
);