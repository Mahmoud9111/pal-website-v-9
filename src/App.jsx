import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import Projects from './components/PorjectsPage/projects.jsx';
import Header from "./components/Header";
import PropertyListing from './components/PorjectsPage/PropertyListing.jsx';
import Footer from './components/Footer';
import AboutusPage from './components/AboutusPage';
import { ThemeProvider } from './contexts/theme-context';
import { WorldMapDemo } from './components/WorldMapDemo';
import ScrollToTop from './components/ScrollToTop';


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
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="App">
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
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;