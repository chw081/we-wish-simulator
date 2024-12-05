import React from 'react';
import Card from './Card';

type InventoryProps = {
  inventory: { image: string; title: string; rarity: string; acquiredAt: Date }[];
  filterCriterion: string;
  sortCriterion: string;
};

const Inventory: React.FC<InventoryProps> = ({ inventory, filterCriterion, sortCriterion }) => {
  // Filter inventory
  const filteredInventory = inventory.filter(card => 
    filterCriterion === 'All' || card.rarity === filterCriterion
  );

  // Sort inventory
  const sortedInventory = filteredInventory.sort((a, b) => {
    if (sortCriterion === 'Rarity') {
      const rarityOrder = ['Legend', 'Epic', 'Rare', 'Uncommon', 'Common'];
      return rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity);
    }
    if (sortCriterion === 'AcquiredAt') {
      return new Date(a.acquiredAt).getTime() - new Date(b.acquiredAt).getTime();
    }
    return 0;
  });

  return (
    <div className="inventory">
      {sortedInventory.length === 0 ? (
        <p>Your inventory is empty. Start wishing!</p>
      ) : (
        <div className="inventory-grid">
          {sortedInventory.map((card, index) => (
            <Card key={index} image={card.image} title={card.title} rarity={card.rarity} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Inventory;
