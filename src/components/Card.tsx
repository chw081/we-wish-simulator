// src/components/Card.tsx
import React from 'react';

type CardProps = {
  image: string;
  title: string;
};

const Card: React.FC<CardProps> = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <p className="card-title">{title}</p>
    </div>
  );
};

export default Card;
