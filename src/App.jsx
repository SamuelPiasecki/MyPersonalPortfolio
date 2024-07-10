import { BrowserRouter } from 'react-router-dom';
import { About, Experience, Contact, Hero, Navbar, Tech, Works }  from './components';
import Snackbar from '@mui/material/Snackbar';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const App = () => {
  const { t } = useTranslation();
  const [showSnackBar, setShowSnackBar] = useState(false);

  const handleShowSnackBar = (data) =>{
    setShowSnackBar(data);
  }

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
        <Contact showSnackbar={handleShowSnackBar} />
        <Snackbar 
          open={showSnackBar}
          autoHideDuration={5000}
          message={t("emailSuccess")}
          onClose={() => setShowSnackBar(false)}
        />
      </div>
    </BrowserRouter>
  )
}

export default App;
