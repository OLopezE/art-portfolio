import { MemoryRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { Navbar } from './components';
import {
  About,
  Contact,
  Exhibitions,
  Home,
  NotFound,
  Work
} from './views';
 
const App = () => {
  return (
    <div>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

    </div>
  );
}

export default App;
