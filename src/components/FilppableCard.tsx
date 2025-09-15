// src/components/FlippableCard.tsx
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Card from './Card';

// Define a type for Card
type CardType = {
  image: string;
  title: string;
  rarity: string;
  acquiredAt: Date; // timestamp of when the card was acquired
};

// Props for the FlippableCard component
type FlippableCardProps = {
  card: CardType;
  flipped: boolean; // whether the card is face-up
  locked: boolean; // whether the card can be flipped again
  onFlip: () => void; // callback when a flip is attempted
};

const FlippableCard: React.FC<FlippableCardProps> = ({ card, flipped, locked, onFlip }) => {
  // Set up flip animation using react-spring
  const springProps = useSpring({
    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    config: { duration: 600 }, // control animation speed
  });

  return (
    <animated.div
      className={`flippable-card ${locked ? 'locked' : ''}`}
      style={springProps}
      onClick={() => {
        if (!locked) onFlip(); // only allow flip if not locked
      }}
    >
      {flipped ? (
        <div className="card-front">
          <Card image={card.image} title={card.title} rarity={card.rarity} />
        </div>
      ) : (
        <div className="card-back">
          <img src="/assets/cardback.jpeg" alt="Card Back" className="card-back-image" />
        </div>
      )}
    </animated.div>
  );
};

export default FlippableCard;
