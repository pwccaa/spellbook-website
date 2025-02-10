import React, { useState } from 'react';
import { Spell } from '../types/Spell';

interface SpellFilterProps {
  onFilter: (filters: Partial<Spell>) => void;
}

const SpellFilter: React.FC<SpellFilterProps> = ({ onFilter }) => {
  const [filters, setFilters] = useState<Partial<Spell>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="school" placeholder="School" onChange={handleChange} />
      <input type="text" name="classes" placeholder="Classes" onChange={handleChange} />
      <button type="submit">Filter</button>
    </form>
  );
};

export default SpellFilter;