// src/components/FlippableCard.tsx
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Card from './Card';

// Define a type for Card
type CardType = {
  image: string;
  title: string;
  rarity: string;
  acquiredAt: Date;
};

type FlippableCardProps = {
  card: CardType;
  flipped: boolean;
  locked: boolean;
  onFlip: () => void;
};

const FlippableCard: React.FC<FlippableCardProps> = ({ card, flipped, locked, onFlip }) => {
  const springProps = useSpring({
    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    config: { duration: 600 },
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
