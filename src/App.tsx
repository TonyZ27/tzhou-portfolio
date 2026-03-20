import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { WorksPage } from './pages/WorksPage';
import { WorkPage } from './pages/WorkPage';
import { About } from './pages/About';
import { AIVoiceAssistantPage } from './pages/AIVoiceAssistant';
import { HMIDesignSystemPage } from './pages/HMIDesignSystem';
import { VibeCodingPortfolioPage } from './pages/VibeCodingPortfolio';
import { useScrollNavigation } from './hooks/useScrollNavigation';

/** Activates scroll/swipe navigation between the 3 main pages. Must live inside BrowserRouter. */
function ScrollNavigationWrapper() {
  useScrollNavigation();
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollNavigationWrapper />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/work/:id" element={<WorkPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
        <Route path="/work/hmi-design-system" element={<HMIDesignSystemPage />} />
        <Route path="/work/my-portfolio" element={<VibeCodingPortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
