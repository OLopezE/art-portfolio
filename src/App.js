import { MemoryRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { Navbar } from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <MemoryRouter>
        <Routes>
          <Routes path="/"/>
          <Routes path="/exhibitions" />
          <Routes />
          <Routes />
          <Routes />
        </Routes>
      </MemoryRouter>
    </div>
  );
}

export default App;
