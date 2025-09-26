import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from "./components/Home";
import Projects from './components/PorjectsPage/projects.jsx';
import Header from "./components/Header";
import PropertyListing from './components/PorjectsPage/PropertyListing.jsx';
import Footer from './components/Footer';
import AboutusPage from './components/AboutusPage';
import { ThemeProvider } from './contexts/theme-context';
import { WorldMapDemo } from './components/WorldMapDemo';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/ui/loader';


function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
}

function HomePage() {
  return (
    <>
    <Home/>
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="App">
          {isLoading ? (
            <Loader />
          ) : (
            <Layout>
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<PropertyListing />} />
                <Route path="/property/:id" element={<PropertyListing />} />
              <Route path="/aboutus" element={<AboutusPage />} />
              <Route path="/contactus" element={<WorldMapDemo />} />
              </Routes>
            </Layout>
          )}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;