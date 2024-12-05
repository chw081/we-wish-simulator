import React from 'react';
import Card from './Card';

type InventoryProps = {
  inventory: { image: string; title: string; rarity: string}[];
};

const Inventory: React.FC<InventoryProps> = ({ inventory }) => {
  console.log('Rendering inventory:', inventory); // Debugging log

  return (
    <div className="inventory">
      {inventory.length === 0 ? (
        <p>Your inventory is empty. Start wishing!</p>
      ) : (
        <div className="inventory-grid">
          {inventory.map((card, index) => (
            <Card key={index} image={card.image} title={card.title} rarity={card.rarity}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Inventory;
