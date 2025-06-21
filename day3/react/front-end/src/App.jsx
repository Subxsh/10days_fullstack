import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import State from './hooks/State';
import Form from './hooks/Form';
import Effect from './hooks/effect';
import Navbar from './components/navbar';
import Reducer from './hooks/Reducer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/state' element={<State />} />
        <Route path='/form' element={<Form />} />
        <Route path='/effect' element={<Effect />} />
        <Route path='/reducer' element={<Reducer />} />
        <Route path='*' element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
