import React from 'react';

type Spell = {
    name: string;
    level: number;
    school: string;
    castingTime: string;
    range: string;
    damageType: string;
};

type SpellSorterProps = {
    onSort: (key: keyof Spell) => Spell[];
    onSortChange: (sortBy: string) => void;
};

const SpellSorter: React.FC<SpellSorterProps> = ({ onSortChange }) => {
    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSortChange(event.target.value);
    };

    return (
        <div>
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" onChange={handleSortChange}>
                <option value="name">Name</option>
                <option value="level">Level</option>
                <option value="school">School</option>
                <option value="castingTime">Casting Time</option>
                <option value="range">Range</option>
                <option value="damageType">Damage Type</option>
            </select>
        </div>
    );
};

export default SpellSorter;