
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
// import 'bootstrap/dist/css/bootstrap.css'
// import { Navbar } from 'react-bootstrap'

function App() {
  console.log(window.location.pathname);
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/about":
      Component = About
      break
    case "/projects":
      Component = Projects
      break
    case "/contact":
      Component = Contact
      break
    
  }

  return (
    <>
      <Navigation />
      <Component />
      </>
  );
}

export default App;
