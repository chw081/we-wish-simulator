// src/pages/Home.tsx
import React, { useState } from 'react';
import Card from '../components/Card';
import { getRandomCard } from '../services/wishLogic';
import { useSprings, animated } from '@react-spring/web';

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

  // Create spring animations for each card
  const springs = useSprings(currentCards.length, currentCards.map((_, index) => ({
      reset: true,
      from: { opacity: 0, transform: 'scale(0.9)' },
      to: { opacity: 1, transform: 'scale(1)' },
      delay: index * 100 + Date.now() % 100, // Add slight variation to always trigger animation
    }))
  );

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
        {springs.map((springProps, index) => (
          <animated.div key={index} style={springProps}>
            <Card image={currentCards[index].image} title={currentCards[index].title} rarity={currentCards[index].rarity} />
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
