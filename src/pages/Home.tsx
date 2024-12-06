// src/pages/Home.tsx
import React, { useState } from 'react';
import Card from '../components/Card';
import { getRandomCard } from '../services/wishLogic';

// Define a type for Card
type CardType = {
  image: string;
  title: string;
  rarity: string;
  acquiredAt: Date;
};

type HomeProps = {
  addToInventory: (cards: CardType[]) => void;
};

const Home: React.FC<HomeProps> = ({ addToInventory }) => {
  const [currentCards, setCurrentCards] = useState<CardType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleWishes = (numOfWishes: number) => {
    setIsLoading(true);
    setTimeout(() => { // Simulate async operation
      // Generate the specified number of random cards and add timestamps and unique IDs
      const newCards = Array.from({ length: numOfWishes }, () => {
        const card = getRandomCard();
        return { ...card, acquiredAt: new Date(),  }; // Add timestamp and unique ID
      });
      setCurrentCards(newCards); // Set the newly generated cards
      addToInventory(newCards); // Add the new cards with timestamps to the inventory
      setIsLoading(false);
      console.log(`${numOfWishes} wish cards:`, newCards); // Debugging log
    }, 100);
  };

  return (
    <div className="home-page">
      <h1 className="home-title">Welcome to Wish Simulator</h1>
      <div className="wish-buttons">
        <button className="wish-button" onClick={() => handleWishes(1)} disabled={isLoading}>
          {isLoading ? 'Processing...' : 'Make a Wish'}
        </button>
        <button className="wish-button" onClick={() => handleWishes(10)} disabled={isLoading}>
          {isLoading ? 'Processing...' : 'Make 10 Wishes'}
        </button>
      </div>
      <div className="cards-display">
        {currentCards.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} rarity={card.rarity} />
        ))}
      </div>
    </div>
  );
};

export default Home;
