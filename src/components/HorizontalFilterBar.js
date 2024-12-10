import React, { useState } from 'react';
import { FaMoneyBillWave, FaSortAlphaDown, FaSortAlphaUp, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

const HorizontalFilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    sortBy: ''
  });

  const handlePriceChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    onFilterChange({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSortChange = (sortOption) => {
    setFilters({ ...filters, sortBy: sortOption });
    onFilterChange({ ...filters, sortBy: sortOption });
  };

  return (
    <div className="flex flex-wrap justify-around items-center bg-light-color p-3 shadow-lg border border-gray-300">
      {/* Filtro por precio */}
      <div className="flex flex-col items-center mx-2">
        <FaMoneyBillWave className="text-3xl text-gray-500" />
        <span className="text-sm text-gray-600">Desde</span>
        <input
          type="number"
          name="minPrice"
          value={filters.minPrice}
          onChange={handlePriceChange}
          className="p-1 border border-gray-300 rounded-lg w-20 text-center"
          placeholder="$"
        />
        <span className="text-sm text-gray-600">Hasta</span>
        <input
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handlePriceChange}
          className="p-1 border border-gray-300 rounded-lg w-20 text-center"
          placeholder="$"
        />
      </div>

      {/* Ordenar por A-Z */}
      <div className="flex flex-col items-center mx-2">
        <FaSortAlphaDown
          className={`text-3xl cursor-pointer ${filters.sortBy == 'a-z' ? 'text-medium-orange' : 'text-gray-500'}`}
          onClick={() => handleSortChange('a-z')}
        />
        <span className="text-sm text-gray-600">A-Z</span>
      </div>

      {/* Ordenar por Z-A */}
      <div className="flex flex-col items-center mx-2">
        <FaSortAlphaUp
          className={`text-3xl cursor-pointer ${filters.sortBy == 'z-a' ? 'text-medium-orange' : 'text-gray-500'}`}
          onClick={() => handleSortChange('z-a')}
        />
        <span className="text-sm text-gray-600">Z-A</span>
      </div>

      {/* Ordenar por menor precio */}
      <div className="flex flex-col items-center mx-2">
        <FaSortAmountUp
          className={`text-3xl cursor-pointer ${filters.sortBy == 'low-price' ? 'text-medium-orange' : 'text-gray-500'}`}
          onClick={() => handleSortChange('low-price')}
        />
        <span className="text-sm text-gray-600">Menor Precio</span>
      </div>

      {/* Ordenar por mayor precio */}
      <div className="flex flex-col items-center mx-2">
        <FaSortAmountDown
          className={`text-3xl cursor-pointer ${filters.sortBy == 'high-price' ? 'text-medium-orange' : 'text-gray-500'}`}
          onClick={() => handleSortChange('high-price')}
        />
        <span className="text-sm text-gray-600">Mayor Precio</span>
      </div>
    </div>
  );
};

export default HorizontalFilterBar;
