import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import NavBar from './components/Navbar';
import Quotes from './pages/Quotes';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/calculator"
          element={<Calculator />}
        />
        <Route
          path="/quotes"
          element={<Quotes />}
        />
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
