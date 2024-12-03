import React, { useState } from 'react';
import Card from '../components/Card';
import { getRandomCard } from '../services/wishLogic';

type HomeProps = {
  addToInventory: (cards: { image: string; title: string }[]) => void;
};

const Home: React.FC<HomeProps> = ({ addToInventory }) => {
  const [currentCards, setCurrentCards] = useState<{ image: string; title: string }[]>([]);

  const handleSingleWish = () => {
    const newCard = getRandomCard();
    setCurrentCards([newCard]); // Set the single card to currentCards
    addToInventory([newCard]); // Add the single card to inventory
    console.log('Single wish card:', newCard);
  };

  const handleTenWishes = () => {
    const newCards = Array.from({ length: 10 }, () => getRandomCard()); // Generate 10 random cards
    setCurrentCards(newCards); // Set the 10 cards to currentCards
    addToInventory(newCards); // Add the 10 cards to inventory
    console.log('Ten wish cards:', newCards);
  };

  return (
    <div className="home-page">
      <h1 className="home-title">Welcome to Wish Simulator</h1>
      <button onClick={handleSingleWish}>Make a Wish</button>
      <button onClick={handleTenWishes}>Make 10 Wishes</button>
      <div className="cards-display">
        {currentCards.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
