import spells from '../data/spells.json';
import { Spell } from '../types/Spell';

export const useSpells = () => {
  const spellList: Spell[] = spells;

  const filterSpells = (filters: Partial<Spell>) => {
    return spellList.filter(spell => {
      return Object.entries(filters).every(([key, value]) => {
        const spellValue = spell[key as keyof Spell];

        if (Array.isArray(value)) {
          return value.every(val => (spellValue as string[]).includes(val));
        }

        if (typeof value === 'boolean') {
          return spellValue === value;
        }

        if (typeof value === 'string') {
          return typeof spellValue === 'string' && spellValue.toLowerCase().includes(value.toLowerCase());
        }

        return false;
      });
    });
  };

  const sortSpells = (key: keyof Spell) => {
    return [...spellList].sort((a, b) => (a[key] > b[key] ? 1 : -1));
  };

  return { spells: spellList, filterSpells, sortSpells };
};