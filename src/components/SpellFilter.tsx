import React, { useState } from 'react';
import { Spell } from '../types/Spell';
import './SpellFilter.css';
import {
  schoolOptions,
  ritualOptions,
  classOptions,
  typeOptions,
  attackOptions,
  savingThrowOptions,
  castingTimeOptions,
  rangeOptions,
  concentrationOptions,
  evolveByLevelOptions,
  componentsOptions,
} from './filterOptions';

interface SpellFilterProps {
  onFilter: (filters: Partial<Spell>) => void;
}

const SpellFilter: React.FC<SpellFilterProps> = ({ onFilter }) => {
  const [filters, setFilters] = useState<Partial<Spell>>({});
  const [isExpanded, setIsExpanded] = useState(false);

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
    <div className="spell-filter-container">
      <button 
        className="filter-toggle-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Filters ▲' : 'Filters ▼'}
      </button>
      <form 
        className={`spell-filter-form ${isExpanded ? 'expanded' : ''}`}
        onSubmit={handleSubmit}
      >
        <div className="filter-section basic-info">
          <h3 className="section-title">Basic Information</h3>
          <div className="filter-group">
            <label className="spell-filter-label">Name</label>
            <input className="spell-filter-input" type="text" name="name" placeholder="Search by name..." onChange={handleChange} />
          </div>
          
          <div className="filter-group">
            <label className="spell-filter-label">Level</label>
            <div className="spell-filter-range">
              <input className="spell-filter-input-level" type="number" name="level_min" placeholder="Min" min="0" max="9" onChange={handleChange} />
              <input className="spell-filter-input-level" type="number" name="level_max" placeholder="Max" min="0" max="9" onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="filter-section spell-attributes">
          <h3 className="section-title">Spell Attributes</h3>
          <div className="filter-group">
            <label className="spell-filter-label">School</label>
            <select className="spell-filter-input" name="school" onChange={handleChange}>
              {schoolOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="spell-filter-label">Class</label>
            <select className="spell-filter-input" name="classes" onChange={handleChange}>
              {classOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="spell-filter-label">Type</label>
            <select className="spell-filter-input" name="type" onChange={handleChange}>
              {typeOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="filter-section casting">
          <h3 className="section-title">Casting Details</h3>
          <div className="filter-group">
            <label className="spell-filter-label">Casting Time</label>
            <select className="spell-filter-input" name="casting_time" onChange={handleChange}>
              {castingTimeOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="spell-filter-label">Range</label>
            <select className="spell-filter-input" name="range" onChange={handleChange}>
              {rangeOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="filter-section components">
          <h3 className="section-title">Components</h3>
          <div className="filter-group">
            <label className="spell-filter-label">Verbal</label>
            <select className="spell-filter-input" name="components_verbal" onChange={handleChange}>
              {componentsOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="spell-filter-label">Somatic</label>
            <select className="spell-filter-input" name="components_somatic" onChange={handleChange}>
              {componentsOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="spell-filter-label">Material</label>
            <select className="spell-filter-input" name="components_material" onChange={handleChange}>
              {componentsOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="filter-section additional">
          <h3 className="section-title">Additional Options</h3>
          <div className="filter-group">
            <label className="spell-filter-label">Ritual</label>
            <select className="spell-filter-input" name="ritual" onChange={handleChange}>
              {ritualOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="spell-filter-label">Concentration</label>
            <select className="spell-filter-input" name="concentration" onChange={handleChange}>
              {concentrationOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        <button className="spell-filter-button" type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default SpellFilter;