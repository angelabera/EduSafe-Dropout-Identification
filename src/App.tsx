import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Documentation from './pages/Documentation';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Security from './pages/Security';
import HelpCenter from './pages/HelpCenter';
import Feedback from './pages/Feedback';
import './App.css';

/**
 * EduSafe - Main App Component
 * Handles routing between pages.
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/security" element={<Security />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
}

export default App;
