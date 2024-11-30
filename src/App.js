import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header.js';
import routes from './routes.js';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 