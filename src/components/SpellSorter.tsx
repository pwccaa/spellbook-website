import React from 'react';
import { Spell } from '../types/Spell';
import './SpellSorter.css';

interface SpellSorterProps {
  onSort: (sortBy: keyof Spell, order: 'asc' | 'desc') => void;
}

const SpellSorter: React.FC<SpellSorterProps> = ({ onSort }) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [sortBy, order] = e.target.value.split('-') as [keyof Spell, 'asc' | 'desc'];
    onSort(sortBy, order);
  };

  return (
    <div className="spell-sorter">
      <h3 className="section-title">Sort Spells</h3>
      <div className="sorter-group">
        <label className="sorter-label">Sort by</label>
        <select className="sorter-select" onChange={handleSortChange}>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="level-asc">Level (Low to High)</option>
          <option value="level-desc">Level (High to Low)</option>
          <option value="school-asc">School (A-Z)</option>
          <option value="school-desc">School (Z-A)</option>
          <option value="casting_time-asc">Casting Time (A-Z)</option>
          <option value="casting_time-desc">Casting Time (Z-A)</option>
          <option value="range-asc">Range (A-Z)</option>
          <option value="range-desc">Range (Z-A)</option>
        </select>
      </div>
    </div>
  );
};

export default SpellSorter;