import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { HomePage } from './pages/HomePage';
import { WorksPage } from './pages/WorksPage';
import { WorkPage } from './pages/WorkPage';
import { About } from './pages/About';
import { AIVoiceAssistantPage } from './pages/AIVoiceAssistant';
import { HMIDesignSystemPage } from './pages/HMIDesignSystem';
import { VibeCodingPortfolioPage } from './pages/VibeCodingPortfolio';
import { useScrollNavigation } from './hooks/useScrollNavigation';
import { PageTransition } from './components/layout/PageTransition';

/** Activates scroll/swipe navigation between the 3 main pages. Must live inside BrowserRouter. */
function ScrollNavigationWrapper() {
  useScrollNavigation();
  return null;
}

/** Routes with AnimatePresence-powered page transitions. Must live inside BrowserRouter. */
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/works" element={<PageTransition><WorksPage /></PageTransition>} />
        <Route path="/work/:id" element={<PageTransition><WorkPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/work/ai-voice-assistant" element={<PageTransition><AIVoiceAssistantPage /></PageTransition>} />
        <Route path="/work/hmi-design-system" element={<PageTransition><HMIDesignSystemPage /></PageTransition>} />
        <Route path="/work/my-portfolio" element={<PageTransition><VibeCodingPortfolioPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollNavigationWrapper />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App
