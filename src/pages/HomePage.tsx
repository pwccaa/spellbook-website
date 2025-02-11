import React, { useState } from 'react';
import { useSpells } from '../services/spellService';
import SpellFilter from '../components/SpellFilter';
import SpellSorter from '../components/SpellSorter';
import SpellList from '../components/SpellList';
import './HomePage.css';
import { Spell } from '../types/Spell';

const HomePage: React.FC = () => {
  // State management
  const { spells, filterSpells, sortSpells } = useSpells();
  const [filteredSpells, setFilteredSpells] = useState(spells);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Calculate pagination values
  const indexOfLastSpell = currentPage * entriesPerPage;
  const indexOfFirstSpell = indexOfLastSpell - entriesPerPage;
  const currentSpells = filteredSpells.slice(indexOfFirstSpell, indexOfLastSpell);
  const totalPages = Math.ceil(filteredSpells.length / entriesPerPage);

  // Event handlers
  const handleFilter = (filters: Partial<Spell>) => {
    const result = filterSpells(filters);
    setFilteredSpells(result);
    setCurrentPage(1);
  };

  const handleSort = (sortBy: keyof Spell, order: 'asc' | 'desc') => {
    const sortedSpells = sortSpells(sortBy, order);
    setFilteredSpells(sortedSpells);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  // Helper functions
  const getVisiblePages = () => {
    const pages = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, 5, totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, totalPages);
    }
    return pages;
  };

  // Render components
  const renderEntriesSelector = () => (
    <div className="entries-selector">
      <label htmlFor="entriesPerPage">Entries per page:</label>
      <select id="entriesPerPage" value={entriesPerPage} onChange={handleEntriesChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
    </div>
  );

  const renderPagination = () => (
    <div className="pagination">
      {getVisiblePages().map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      ))}
    </div>
  );

  return (
    <div className="homepage">
      <h1 className="homepage-title">Spellbook</h1>
      
      <div className="homepage-controls">
        <SpellFilter onFilter={handleFilter} />
        <SpellSorter onSort={handleSort} />
        {renderEntriesSelector()}
      </div>

      <SpellList spells={currentSpells} />
      {renderPagination()}
    </div>
  );
};

export default HomePage;