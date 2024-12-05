// src/components/Card.tsx
import React from 'react';

type CardProps = {
  image: string;
  title: string;
  rarity: string;
};

const Card: React.FC<CardProps> = ({ image, title, rarity }) => {
  return (
    <div className={`card ${rarity.toLowerCase()}`}>
      <img src={image} alt={title} className="card-image" />
      <p className="card-title">{title}</p>
      <p className="card-rarity">{rarity}</p> {/* Display rarity */}
    </div>
  );
};

export default Card;
