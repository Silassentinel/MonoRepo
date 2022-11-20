// #region imports
// #region styles
// #endregion
// #region components
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Header from '@silassentinel/frontendlib/src/components/header/Header';
import Footer from '@silassentinel/frontendlib/src/components/footer/Footer';
// #endregion
// #region views
import About from './views/About';
import Blogs from './views/Blogs';
import Contact from './views/Contact';
import Cookie from './views/Cookie';
import Home from './views/Home';
import Jobs from './views/Jobs';
import NoMatch from './views/NoMatch';
import Privacy from './views/Privacy';
// #endregion
import Clients from './views/Clients';
// #endregion
// #region Constants
// #endregion

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Cookie" element={<Cookie />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
