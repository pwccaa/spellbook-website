import spells from '../data/spells.json';
import { Spell } from '../types/Spell';

export const useSpells = () => {
  const spellList: Spell[] = spells as unknown as Spell[];

  const filterSpells = (filters: Partial<Spell>) => {
    console.log('Incoming filters:', filters);

    return [...spellList].filter(spell => {
      for (const [key, value] of Object.entries(filters)) {
        // Skip empty filters
        if (!value || value === '') {
          continue;
        }

        switch (key) {
          case 'name':
            if (!spell.name.toLowerCase().includes(value.toString().toLowerCase())) {
              return false;
            }
            break;

          case 'classes':
            if (Array.isArray(spell.classes)) {
              const filterClass = value.toString().toLowerCase();
              if (!spell.classes.some(c => c.toLowerCase() === filterClass)) {
                return false;
              }
            }
            break;

          case 'school':
            if (spell.school.toLowerCase() !== value.toString().toLowerCase()) {
              return false;
            }
            break;

          case 'ritual':
            if (spell.ritual !== (value === 'true')) {
              return false;
            }
            break;

          case 'level':
            const level = parseInt(value.toString());
            if (!isNaN(level) && spell.level !== level) {
              return false;
            }
            break;

          case 'concentration':
            if (spell.concentration !== (value === 'true')) {
              return false;
            }
            break;

          case 'casting_time':
            if (spell.casting_time.toLowerCase() !== value.toString().toLowerCase()) {
              return false;
            }
            break;

          case 'range':
            if (spell.range.toLowerCase() !== value.toString().toLowerCase()) {
              return false;
            }
            break;

          case 'type':
            if (spell.type.toLowerCase() !== value.toString().toLowerCase()) {
              return false;
            }
            break;

          default:
            if (key.startsWith('components_')) {
              const componentType = key.split('_')[1] as keyof typeof spell.components;
              if (spell.components[componentType] !== (value === 'true')) {
                return false;
              }
            }
            break;
        }
      }
      return true;
    });
  };

  const sortSpells = (key: keyof Spell, order: 'asc' | 'desc') => {
    return [...spellList].sort((a, b) => {
      const valueA = a[key] ?? '';
      const valueB = b[key] ?? '';
      if (order === 'asc') {
        return valueA > valueB ? 1 : -1;
      } else {
        return valueA < valueB ? 1 : -1;
      }
    });
  };

  return { spells: spellList, filterSpells, sortSpells };
};