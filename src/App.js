import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './screens/Home';
import Prompts from './screens/Prompts';
import Journal from './screens/Journal';
import Conflict from './screens/Conflict';
import Games from './screens/Games';
import TakeTurns from './screens/TakeTurns';
import Onboarding from './components/Onboarding';

const App = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("seenOnboarding");
    if (!seen) {
      setShowOnboarding(true);
    }
  }, []);

  const handleFinishOnboarding = () => {
    localStorage.setItem("seenOnboarding", "true");
    setShowOnboarding(false);
  };

  if (showOnboarding) {
    return <Onboarding onFinish={handleFinishOnboarding} />;
  }

  return (
    <Router>
      <nav style={{ padding: '10px', backgroundColor: '#ffe4ec' }}>
        <Link to="/">Home</Link> | <Link to="/prompts">Prompts</Link> | <Link to="/journal">Journal</Link> | <Link to="/conflict">Conflict</Link> | <Link to="/games">Games</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompts" element={<Prompts />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/conflict" element={<Conflict />} />
        <Route path="/conflict/taketurns" element={<TakeTurns />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </Router>
  );
};

export default App;