import React, { useState } from 'react';
import { ShoppingBag, Search, Sun, Moon, Menu, X, User } from 'lucide-react';

export default function Header({ 
  cartCount, 
  onCartToggle, 
  isDarkMode, 
  toggleDarkMode, 
  activeCategory, 
  onCategorySelect, 
  searchQuery, 
  onSearchChange,
  categories,
  onNavigate
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="glass sticky-header">
      <div className="container header-container">
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Brand Logo */}
        <div className="logo" onClick={() => onNavigate('home')}>
          <span>LUXE</span><span>CART</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`nav-link ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => {
                onCategorySelect(cat);
                onNavigate('home');
              }}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="search-bar-container">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Right Section Actions */}
        <div className="header-actions">
          {/* Dark Mode Toggle */}
          <button 
            className="action-btn" 
            onClick={toggleDarkMode}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun size={20} className="icon-glow" /> : <Moon size={20} />}
          </button>

          {/* User Account */}
          <button className="action-btn" title="Account">
            <User size={20} />
          </button>

          {/* Cart Icon with badge count */}
          <button 
            className="action-btn cart-btn" 
            onClick={onCartToggle}
            title="View Cart"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="cart-badge animate-fade">{cartCount}</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="mobile-menu animate-slide">
          <nav className="mobile-nav">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`mobile-nav-link ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  onCategorySelect(cat);
                  onNavigate('home');
                  setIsMobileMenuOpen(false);
                }}
              >
                {cat}
              </button>
            ))}
          </nav>
          
          {/* Mobile Search */}
          <div className="mobile-search">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      )}
    </header>
  );
}
