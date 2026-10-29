import React from 'react';
import { Star, SlidersHorizontal, RotateCcw } from 'lucide-react';

export default function FilterSidebar({
  selectedCategory,
  onCategorySelect,
  categories,
  priceRange,
  onPriceRangeChange,
  minRating,
  onMinRatingChange,
  sortBy,
  onSortByChange,
  onResetFilters
}) {
  return (
    <aside className="filter-sidebar">
      <div className="sidebar-header">
        <div className="title-group">
          <SlidersHorizontal size={18} />
          <h2>Filters</h2>
        </div>
        <button className="reset-btn" onClick={onResetFilters} title="Reset All Filters">
          <RotateCcw size={16} />
          <span>Clear All</span>
        </button>
      </div>

      {/* Sort Section */}
      <div className="filter-section">
        <h3>Sort By</h3>
        <select 
          value={sortBy} 
          onChange={(e) => onSortByChange(e.target.value)}
          className="filter-select"
        >
          <option value="popular">Popularity</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Average Rating</option>
        </select>
      </div>

      {/* Categories Section */}
      <div className="filter-section">
        <h3>Categories</h3>
        <div className="category-list">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => onCategorySelect(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter Section */}
      <div className="filter-section">
        <div className="price-header">
          <h3>Price Range</h3>
          <span className="price-value">${priceRange[0]} - ${priceRange[1]}</span>
        </div>
        <div className="range-container">
          <input
            type="range"
            min="0"
            max="500"
            step="10"
            value={priceRange[1]}
            onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
            className="price-slider"
          />
          <div className="slider-labels">
            <span>$0</span>
            <span>$500+</span>
          </div>
        </div>
      </div>

      {/* Rating Section */}
      <div className="filter-section">
        <h3>Minimum Rating</h3>
        <div className="rating-options">
          {[4, 3, 2].map((stars) => (
            <label key={stars} className="rating-option">
              <input
                type="radio"
                name="rating-filter"
                checked={minRating === stars}
                onChange={() => onMinRatingChange(stars)}
                className="rating-radio"
              />
              <div className="stars-label">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < stars ? 'var(--accent)' : 'none'}
                    stroke={i < stars ? 'var(--accent)' : 'var(--text-light)'}
                  />
                ))}
                <span className="rating-text">& Up</span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
