import React from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onQuickView }) {
  const { name, category, price, salePrice, rating, reviewsCount, image, badge } = product;
  const hasSale = !!salePrice;

  return (
    <div className="product-card animate-fade">
      {/* Badge (Sale / New / Hot) */}
      {badge && (
        <span className={`product-badge badge-${badge.toLowerCase()}`}>
          {badge}
        </span>
      )}

      {/* Image Gallery Wrapper */}
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-image" loading="lazy" />
        
        {/* Hover Action Overlay */}
        <div className="product-overlay">
          <button 
            className="overlay-action-btn quick-view-btn" 
            onClick={() => onQuickView(product)}
            title="Quick View"
          >
            <Eye size={18} />
            <span>Quick View</span>
          </button>
          
          <button 
            className="overlay-action-btn add-cart-btn" 
            onClick={() => onAddToCart(product)}
            title="Add to Cart"
          >
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      {/* Card Info */}
      <div className="product-info">
        <span className="product-category">{category}</span>
        <h3 className="product-name" onClick={() => onQuickView(product)}>
          {name}
        </h3>

        {/* Rating Row */}
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < Math.floor(rating) ? 'var(--accent)' : 'none'}
                stroke={i < Math.floor(rating) ? 'var(--accent)' : 'var(--text-light)'}
              />
            ))}
          </div>
          <span className="rating-count">({reviewsCount})</span>
        </div>

        {/* Price Row */}
        <div className="product-price-row">
          {hasSale ? (
            <>
              <span className="sale-price">${salePrice.toFixed(2)}</span>
              <span className="original-price">${price.toFixed(2)}</span>
            </>
          ) : (
            <span className="normal-price">${price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
