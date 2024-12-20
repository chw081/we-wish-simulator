import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import InventoryPage from './pages/InventoryPage';
import About from './pages/About';

type CardType = {
  image: string;
  title: string;
  rarity: string;
  acquiredAt: Date; // Include acquisition time
};

function App() {
  const [inventory, setInventory] = useState<CardType[]>([]);

  const handleAddToInventory = (newCards: { image: string; title: string; rarity: string }[]) => {
    const cardsWithTimestamps = newCards.map(card => ({
      ...card,
      acquiredAt: new Date(), // Add acquisition timestamp
    }));
    setInventory((prevInventory) => [...prevInventory, ...cardsWithTimestamps]);
    console.log('Updated inventory:', [...inventory, ...cardsWithTimestamps]);
  };

  console.log('Inventory before passing to InventoryPage:', inventory);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home addToInventory={handleAddToInventory} />} />
          <Route path="/inventory" element={<InventoryPage inventory={inventory} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="page">
      <Navbar />
      <div className="content">{children}</div>
      {location.pathname === '/' || location.pathname === '/inventory' ? <Footer /> : null}
    </div>
  );
}

export default App;
