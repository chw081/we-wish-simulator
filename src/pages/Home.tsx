import React, { useState } from 'react';
import FlippableCard from '../components/FilppableCard';
import { getRandomCard } from '../services/wishLogic';

// Define a type for Card
type CardType = {
  image: string;
  title: string;
  rarity: string;
  acquiredAt: Date; // timestamp of when the card was acquired
};

type HomeProps = {
  addToInventory: (cards: CardType[]) => void; // callback to add cards to user's inventory
};

const Home: React.FC<HomeProps> = ({ addToInventory }) => {
  // Stores the cards drawn in the current wish
  const [currentCards, setCurrentCards] = useState<CardType[]>([]);
  // Tracks which cards are flipped (true = front side showing)
  const [flippedStates, setFlippedStates] = useState<boolean[]>([]);
  // Tracks which cards are locked (true = cannot flip anymore/locked state)
  const [lockedStates, setLockedStates] = useState<boolean[]>([]);
  // Tracks whether wishes are being processed
  const [isLoading, setIsLoading] = useState(false);

  // Handles generating wishes (1 or 10)
  const handleWishes = (numOfWishes: number) => {
    setIsLoading(true);
    setTimeout(() => {
      // Generate random cards and timestamp them
      const newCards = Array.from({ length: numOfWishes }, () => {
        const card = getRandomCard();
        return { ...card, acquiredAt: new Date() };
      });

      // Store new cards and reset flip/lock states
      setCurrentCards(newCards);
      setFlippedStates(new Array(numOfWishes).fill(false));
      setLockedStates(new Array(numOfWishes).fill(false));

      // Add generated cards to the user's permanent inventory
      addToInventory(newCards);
      setIsLoading(false);
    }, 100); // simulate async delay
  };

  // Handles flipping a card at a specific index
  const handleFlip = (index: number) => {
    // Force card at `index` to flip to front
    setFlippedStates((prev) =>
      prev.map((flipped, i) => (i === index ? true : flipped)) // force front side only
    );

    // Lock the card at `index` to prevent further flipping
    setLockedStates((prev) =>
      prev.map((locked, i) => (i === index ? true : locked)) // lock the card
    );
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
          <FlippableCard
            key={index}
            card={card}
            flipped={flippedStates[index]}
            locked={lockedStates[index]}
            onFlip={() => handleFlip(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;