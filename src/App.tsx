import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { WorksPage } from './pages/WorksPage';
import { WorkPage } from './pages/WorkPage';
import { About } from './pages/About';
import { AIVoiceAssistantPage } from './pages/AIVoiceAssistant';
import { HMIDesignSystemPage } from './pages/HMIDesignSystem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/work/:id" element={<WorkPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
        <Route path="/work/hmi-design-system" element={<HMIDesignSystemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
