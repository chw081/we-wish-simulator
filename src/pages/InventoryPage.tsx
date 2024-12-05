import React from 'react';
import Inventory from '../components/Inventory';

type InventoryPageProps = {
  inventory: { image: string; title: string; rarity: string}[];
};

const InventoryPage: React.FC<InventoryPageProps> = ({ inventory }) => {
  console.log('InventoryPage received inventory:', inventory); // Debugging log

  return (
    <div className="inventory-page">
      <h1 className="inventory-title">Your Inventory</h1>
      <Inventory inventory={inventory} />
    </div>
  );
};

export default InventoryPage;
