import React, { useState } from 'react';
import Card from '../components/Card';
import { getRandomCard } from '../services/wishLogic';

type HomeProps = {
  addToInventory: (cards: { image: string; title: string; rarity: string;}[]) => void;
};

const Home: React.FC<HomeProps> = ({ addToInventory }) => {
  const [currentCards, setCurrentCards] = useState<{ image: string; title: string; rarity: string }[]>([]);

  const handleWishes = (numOfWishes: number) => {
    // Generate the specified number of random cards
    const newCards = Array.from({ length: numOfWishes }, () => getRandomCard()); 
    setCurrentCards(newCards); // Set the newly generated numOfWishes cards to currentCards
    addToInventory(newCards); // Add the numOfWishes cards to the inventory
    // Log the cards (for debugging or verification purposes)
    console.log(`${numOfWishes} wish cards:`, newCards);
  };

  return (
    <div className="home-page">
      <h1 className="home-title">Welcome to Wish Simulator</h1>
      <button onClick={() => handleWishes(1)}>Make a Wish</button>
      <button onClick={() => handleWishes(10)}>Make 10 Wishes</button>
      <div className="cards-display">
        {currentCards.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} rarity={card.rarity} />
        ))}
      </div>
    </div>
  );
};

export default Home;
