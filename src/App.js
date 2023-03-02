import { Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
// import Navigation from './Navigation';
import Projects from './Projects';

function App() {
  return (
    <Routes>
      <Route path='/' element = {<Home />}></Route>
      {/* <Route path='/home' element = {<Home />}></Route> */}
      <Route path='/projects' element = {<Projects />}></Route>
      <Route path='/about' element = {<About />}></Route>
      <Route path='/contact' element = {<Contact />}></Route>
    </Routes>
  )
}

export default App;