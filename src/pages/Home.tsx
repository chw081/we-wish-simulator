import React, { useState } from 'react';
import Card from '../components/Card';
import { getRandomCard } from '../services/wishLogic';
import { useSpring, animated } from '@react-spring/web';

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
  const [isLoading, setIsLoading] = useState(false);

  const handleWishes = (numOfWishes: number) => {
    setIsLoading(true);
    setTimeout(() => { // Simulate async operation
      // Generate the specified number of random cards and add timestamps
      const newCards = Array.from({ length: numOfWishes }, () => {
        const card = getRandomCard();
        return { ...card, acquiredAt: new Date() };
      });
      setCurrentCards(newCards); // Set the newly generated cards
      setFlippedStates(new Array(numOfWishes).fill(false)); // Reset all cards to the back side
      addToInventory(newCards); // Add the new cards with timestamps to the inventory
      setIsLoading(false);
      console.log(`${numOfWishes} wish cards:`, newCards); // Debugging log
    }, 100);
  };

  const handleFlip = (index: number) => {
    setFlippedStates((prevFlippedStates) =>
      prevFlippedStates.map((flipped, i) => (i === index ? !flipped : flipped))
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
            onFlip={() => handleFlip(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Updated FlippableCard Component
const FlippableCard: React.FC<{ card: CardType; flipped: boolean; onFlip: () => void }> = ({
  card,
  flipped,
  onFlip,
}) => {
  const springProps = useSpring({
    opacity: 1,
    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    from: { opacity: 0, transform: 'rotateY(0deg)' },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      className="flippable-card"
      style={springProps}
      onClick={onFlip}
    >
      {flipped ? (
        <div className="card-front">
          <Card
            image={card.image}
            title={card.title}
            rarity={card.rarity}
          />
        </div>
      ) : (
        <div className="card-back">
          <img src="/assets/cardback.jpeg" alt="Card Back" className="card-back-image" />
        </div>
      )}
    </animated.div>
  );
};

export default Home;
