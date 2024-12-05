import React, { useState } from 'react';
import Inventory from '../components/Inventory';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type InventoryPageProps = {
  inventory: { image: string; title: string; rarity: string; acquiredAt: Date }[];
};

const InventoryPage: React.FC<InventoryPageProps> = ({ inventory }) => {
  const [filterCriterion, setFilterCriterion] = useState('All');
  const [sortCriterion, setSortCriterion] = useState('Rarity');

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterCriterion(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortCriterion(event.target.value);
  };

  return (
    <div className="inventory-page">
      <h1 className="inventory-title">Your Inventory</h1>
      <div className="inventory-controls">
        <label>
          <FontAwesomeIcon icon={faFilter} style={{ marginRight: '8px' }} />
          Filter by Rarity:
          <select value={filterCriterion} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Common">Common</option>
            <option value="Uncommon">Uncommon</option>
            <option value="Rare">Rare</option>
            <option value="Epic">Epic</option>
            <option value="Legend">Legend</option>
          </select>
        </label>
        <label>
          <FontAwesomeIcon icon={faSort} style={{ marginRight: '8px' }} />
          Sort by:
          <select value={sortCriterion} onChange={handleSortChange}>
            <option value="Rarity">Rarity</option>
            <option value="AcquiredAt">Acquisition Time</option>
          </select>
        </label>
      </div>
      <Inventory
        inventory={inventory}
        filterCriterion={filterCriterion}
        sortCriterion={sortCriterion}
      />
    </div>
  );
};

export default InventoryPage;
