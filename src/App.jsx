import  { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Hero, Navbar }
  from './components';

const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
