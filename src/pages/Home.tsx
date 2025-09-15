import React, { useState } from 'react';
import FlippableCard from '../components/FilppableCard';
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
  const [flippedStates, setFlippedStates] = useState<boolean[]>([]);
  const [lockedStates, setLockedStates] = useState<boolean[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleWishes = (numOfWishes: number) => {
    setIsLoading(true);
    setTimeout(() => {
      const newCards = Array.from({ length: numOfWishes }, () => {
        const card = getRandomCard();
        return { ...card, acquiredAt: new Date() };
      });

      setCurrentCards(newCards);
      setFlippedStates(new Array(numOfWishes).fill(false));
      setLockedStates(new Array(numOfWishes).fill(false));
      addToInventory(newCards);
      setIsLoading(false);
    }, 100);
  };

  const handleFlip = (index: number) => {
    setFlippedStates((prev) =>
      prev.map((flipped, i) => (i === index ? true : flipped)) // force front side only
    );
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