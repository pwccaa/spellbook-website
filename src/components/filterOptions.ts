import spells from '../data/spells.json';

const getUniqueValues = (key: string) => {
  const values = new Set<string>();
  spells.forEach((spell: any) => {
    if (Array.isArray(spell[key])) {
      spell[key].forEach((value: string) => values.add(value));
    } else {
      values.add(spell[key]);
    }
  });
  return Array.from(values).sort();
};

export const schoolOptions = [{ value: '', label: 'Any' }, ...getUniqueValues('school').map(value => ({ value, label: value.charAt(0).toUpperCase() + value.slice(1) }))];
export const ritualOptions = [
  { value: '', label: 'Any' },
  { value: 'true', label: 'Yes' },
  { value: 'false', label: 'No' },
];
export const classOptions = [{ value: '', label: 'Any' }, ...getUniqueValues('classes').map(value => ({ value, label: value.charAt(0).toUpperCase() + value.slice(1) }))];
export const typeOptions = [{ value: '', label: 'Any' }, ...getUniqueValues('type').map(value => ({ value, label: value.charAt(0).toUpperCase() + value.slice(1) }))];
export const attackOptions = [
  { value: '', label: 'Any' },
  { value: 'none', label: 'None' },
  { value: 'melee spell attack', label: 'Melee Spell Attack' },
  { value: 'ranged spell attack', label: 'Ranged Spell Attack' },
  { value: 'weapon attack', label: 'Weapon Attack' },
];
export const savingThrowOptions = [
  { value: '', label: 'Any' },
  { value: 'none', label: 'None' },
  { value: 'charisma', label: 'Charisma' },
  { value: 'constitution', label: 'Constitution' },
  { value: 'dexterity', label: 'Dexterity' },
  { value: 'intelligence', label: 'Intelligence' },
  { value: 'strength', label: 'Strength' },
  { value: 'wisdom', label: 'Wisdom' },
];
export const castingTimeOptions = [{ value: '', label: 'Any' }, ...getUniqueValues('casting_time').map(value => ({ value, label: value.charAt(0).toUpperCase() + value.slice(1) }))];
export const rangeOptions = [{ value: '', label: 'Any' }, ...getUniqueValues('range').map(value => ({ value, label: value.charAt(0).toUpperCase() + value.slice(1) }))];
export const concentrationOptions = [
  { value: '', label: 'Any' },
  { value: 'true', label: 'Yes' },
  { value: 'false', label: 'No' },
];
export const evolveByLevelOptions = [
  { value: '', label: 'Any' },
  { value: 'true', label: 'Yes' },
  { value: 'false', label: 'No' },
];
export const componentsOptions = [
  { value: '', label: 'Any' },
  { value: 'true', label: 'Yes' },
  { value: 'false', label: 'No' },
];