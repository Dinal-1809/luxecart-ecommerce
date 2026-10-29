import React from 'react';
import ProductCard from './ProductCard';
import { ShoppingBag } from 'lucide-react';

export default function ProductList({ products, onAddToCart, onQuickView }) {
  if (products.length === 0) {
    return (
      <div className="empty-products-state animate-fade">
        <div className="empty-icon-wrapper">
          <ShoppingBag size={48} className="empty-icon" />
        </div>
        <h2>No Products Found</h2>
        <p>Try adjusting your search queries or clearing filters to find what you are looking for.</p>
      </div>
    );
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  );
}
