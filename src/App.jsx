import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FilterSidebar from './components/FilterSidebar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import CheckoutPage from './components/CheckoutPage';
import { mockProducts, categories } from './data/mockData';

export default function App() {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Cart state
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Navigation state
  const [activePage, setActivePage] = useState('home'); // 'home', 'checkout'
  const [selectedProduct, setSelectedProduct] = useState(null); // for Quick View modal

  // Filtering states
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('popular');

  // Handle dark mode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  // Cart Handlers
  const handleAddToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      // Find if item with same options already exists
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.id === productToAdd.id &&
          item.selectedColor === productToAdd.selectedColor &&
          item.selectedSize === productToAdd.selectedSize
      );

      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += productToAdd.quantity || 1;
        return newItems;
      } else {
        return [...prevItems, { ...productToAdd, quantity: productToAdd.quantity || 1 }];
      }
    });
    // Open cart drawer on add
    setIsCartOpen(true);
  };

  const handleUpdateCartQty = (itemToUpdate, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(itemToUpdate);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemToUpdate.id &&
        item.selectedColor === itemToUpdate.selectedColor &&
        item.selectedSize === itemToUpdate.selectedSize
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveCartItem = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.id === itemToRemove.id &&
            item.selectedColor === itemToRemove.selectedColor &&
            item.selectedSize === itemToRemove.selectedSize
          )
      )
    );
  };

  const handleClearCart = () => setCartItems([]);

  // Reset all filters
  const handleResetFilters = () => {
    setActiveCategory('All');
    setPriceRange([0, 500]);
    setMinRating(0);
    setSortBy('popular');
    setSearchQuery('');
  };

  // Filter and sort products logic
  const filteredProducts = mockProducts
    .filter((product) => {
      const matchesCategory =
        activeCategory === 'All' || product.category.toLowerCase() === activeCategory.toLowerCase();
      
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const finalPrice = product.salePrice || product.price;
      const matchesPrice = finalPrice >= priceRange[0] && finalPrice <= priceRange[1];

      const matchesRating = product.rating >= minRating;

      return matchesCategory && matchesSearch && matchesPrice && matchesRating;
    })
    .sort((a, b) => {
      const priceA = a.salePrice || a.price;
      const priceB = b.salePrice || b.price;

      if (sortBy === 'price-low') return priceA - priceB;
      if (sortBy === 'price-high') return priceB - priceA;
      if (sortBy === 'rating') return b.rating - a.rating;
      // 'popular' defaults to rating * reviewsCount as proxy for popularity
      return (b.rating * b.reviewsCount) - (a.rating * a.reviewsCount);
    });

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="app-container">
      {/* Navigation Header */}
      <Header
        cartCount={cartCount}
        onCartToggle={() => setIsCartOpen(!isCartOpen)}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        activeCategory={activeCategory}
        onCategorySelect={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        categories={categories}
        onNavigate={setActivePage}
      />

      {/* Main Pages Router */}
      <main>
        {activePage === 'home' ? (
          <div className="container main-layout">
            {/* Left Filter Sidebar */}
            <FilterSidebar
              selectedCategory={activeCategory}
              onCategorySelect={setActiveCategory}
              categories={categories}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              minRating={minRating}
              onMinRatingChange={setMinRating}
              sortBy={sortBy}
              onSortByChange={setSortBy}
              onResetFilters={handleResetFilters}
            />

            {/* Right Product Grid Catalog */}
            <section className="catalog-section">
              <div className="catalog-header" style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>
                  {activeCategory === 'All' ? 'Discover Products' : activeCategory}
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Showing {filteredProducts.length} of {mockProducts.length} premium designs
                </p>
              </div>
              
              <ProductList
                products={filteredProducts}
                onAddToCart={(prod) => handleAddToCart({ ...prod, quantity: 1 })}
                onQuickView={setSelectedProduct}
              />
            </section>
          </div>
        ) : (
          /* Checkout Flow Page */
          <CheckoutPage
            cartItems={cartItems}
            onBackToShop={() => setActivePage('home')}
            onClearCart={handleClearCart}
          />
        )}
      </main>

      {/* Product Detail Quick View Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Cart Drawer Slide-out */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setActivePage('checkout');
        }}
      />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
