import React from 'react';
import { Spell } from '../types/Spell';
import './SpellList.css';

interface SpellListProps {
  spells: Spell[];
}

const SpellList: React.FC<SpellListProps> = ({ spells }) => {
  const formatComponents = (components: Spell['components']): string => {
    const parts: string[] = [];
    if (components.verbal) parts.push('V');
    if (components.somatic) parts.push('S');
    if (components.material) {
      parts.push('M');
      if (components.materials) {
        parts.push(`(${components.materials})`);
      }
    }
    return parts.join(', ');
  };

  return (
    <div className="spell-list">
      <h2>Spell List</h2>
      <div className="spell-list-grid">
        {spells.map((spell) => (
          <div key={spell.name} className="spell-item">
            <div className='spell-header'>
              <h3>{spell.name}</h3>
              <p>{spell.type}</p><br />
              <p><b>Casters</b>: {spell.classes.join(', ')}</p>
            </div>

            <div className='spell-body'>
            <p><b>Level:</b> {spell.level}</p>
            <p><b>School:</b> {spell.school}</p>
            <p><b>Ritual:</b> {spell.ritual ? 'Yes' : 'No'}</p>
            <p><b>Casting Time:</b> {spell.casting_time}</p>
            <p><b>Range:</b> {spell.range}</p>
            <p><b>Components:</b> {formatComponents(spell.components)}</p>
            <p><b>Duration:</b> {spell.duration}</p>
            <p>{spell.description}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SpellList;