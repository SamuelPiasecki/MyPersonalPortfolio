import  { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PuffLoader from "react-spinners/PuffLoader";
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
        <Suspense fallback={
          <div className='w-full flex justify-center items-center py-6'>
            <PuffLoader
              color={'#fff'}
              size={150}
              aria-label="Loading Spinner"
            />
          </div>
          }>
          <About />
          <Experience />
          <Tech />
          <Works />
        </Suspense>
        <div className="relative z-0">
          <Suspense fallback={
            <div className='w-full flex justify-center items-center py-6'>
              <PuffLoader
                color={'#fff'}
                size={150}
                aria-label="Loading Spinner"
              />
            </div>
          }>
            <Contact />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
