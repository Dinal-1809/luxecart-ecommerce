import React, { useState } from 'react';
import { Star, ShoppingCart, Plus, Minus, X, Truck, ShieldCheck, Heart } from 'lucide-react';

export default function ProductDetail({ product, onClose, onAddToCart }) {
  const { name, category, price, salePrice, rating, reviewsCount, image, description, features, variants, reviews } = product;
  
  const [selectedColor, setSelectedColor] = useState(variants?.colors?.[0] || null);
  const [selectedSize, setSelectedSize] = useState(variants?.sizes?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description'); // 'description', 'features', 'reviews'

  const incrementQty = () => setQuantity(prev => prev + 1);
  const decrementQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      selectedColor: selectedColor?.name || null,
      selectedSize: selectedSize || null,
      quantity
    });
    onClose();
  };

  const finalPrice = salePrice || price;

  return (
    <div className="modal-backdrop animate-fade">
      <div className="product-detail-modal animate-slide">
        {/* Close Button */}
        <button className="close-modal-btn" onClick={onClose} aria-label="Close details">
          <X size={24} />
        </button>

        <div className="detail-grid">
          {/* Product Gallery Column */}
          <div className="detail-gallery-col">
            <div className="main-image-container">
              <img src={image} alt={name} className="gallery-main-image" />
              {product.badge && (
                <span className={`product-badge badge-${product.badge.toLowerCase()} detail-badge`}>
                  {product.badge}
                </span>
              )}
            </div>
            
            {/* Quick Guarantees */}
            <div className="guarantees-row">
              <div className="guarantee-item">
                <Truck size={18} />
                <div>
                  <h4>Free Delivery</h4>
                  <p>On orders over $50</p>
                </div>
              </div>
              <div className="guarantee-item">
                <ShieldCheck size={18} />
                <div>
                  <h4>2 Year Warranty</h4>
                  <p>100% Genuine product</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info Column */}
          <div className="detail-info-col">
            <span className="info-category">{category}</span>
            <h1 className="info-title">{name}</h1>

            {/* Ratings Row */}
            <div className="info-rating-row">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(rating) ? 'var(--accent)' : 'none'}
                    stroke={i < Math.floor(rating) ? 'var(--accent)' : 'var(--text-light)'}
                  />
                ))}
              </div>
              <span className="rating-value">{rating}</span>
              <span className="divider">|</span>
              <span className="reviews-text">{reviewsCount} Verified Reviews</span>
            </div>

            {/* Price Row */}
            <div className="info-price-row">
              {salePrice ? (
                <>
                  <span className="sale-price">${salePrice.toFixed(2)}</span>
                  <span className="original-price">${price.toFixed(2)}</span>
                  <span className="price-discount">
                    Save ${(price - salePrice).toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="normal-price">${price.toFixed(2)}</span>
              )}
            </div>

            <p className="short-description">{description}</p>

            {/* Color Variant Selector */}
            {variants?.colors && (
              <div className="selector-group">
                <h3>Color: <span className="selected-value">{selectedColor?.name}</span></h3>
                <div className="color-swatches">
                  {variants.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`color-swatch-btn ${selectedColor?.name === color.name ? 'active' : ''}`}
                      style={{ '--swatch-color': color.hex }}
                      title={color.name}
                      aria-label={`Select color ${color.name}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Variant Selector */}
            {variants?.sizes && (
              <div className="selector-group">
                <h3>Size: <span className="selected-value">{selectedSize}</span></h3>
                <div className="size-options">
                  {variants.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`size-option-btn ${selectedSize === size ? 'active' : ''}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Purchase Row */}
            <div className="purchase-row">
              {/* Quantity */}
              <div className="quantity-selector">
                <button onClick={decrementQty} aria-label="Decrease quantity">
                  <Minus size={16} />
                </button>
                <span>{quantity}</span>
                <button onClick={incrementQty} aria-label="Increase quantity">
                  <Plus size={16} />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="primary-action-btn add-to-cart-large" onClick={handleAddToCart}>
                <ShoppingCart size={18} />
                <span>Add To Bag - ${(finalPrice * quantity).toFixed(2)}</span>
              </button>

              {/* Wishlist Toggle Button */}
              <button className="wishlist-btn" title="Add to Wishlist" aria-label="Add to Wishlist">
                <Heart size={20} />
              </button>
            </div>

            {/* Tabbed Info Panel */}
            <div className="info-tabs-container">
              <div className="tabs-header">
                <button 
                  className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  Details
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                  onClick={() => setActiveTab('features')}
                >
                  Features
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews ({reviews?.length || 0})
                </button>
              </div>

              <div className="tab-content animate-fade">
                {activeTab === 'description' && (
                  <p>{description}</p>
                )}

                {activeTab === 'features' && (
                  <ul className="features-list">
                    {features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                )}

                {activeTab === 'reviews' && (
                  <div className="reviews-list">
                    {reviews && reviews.length > 0 ? (
                      reviews.map((rev) => (
                        <div key={rev.id} className="review-item">
                          <div className="review-meta">
                            <span className="review-author">{rev.author}</span>
                            <span className="review-date">{rev.date}</span>
                          </div>
                          <div className="review-rating">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={12}
                                fill={i < rev.rating ? 'var(--accent)' : 'none'}
                                stroke={i < rev.rating ? 'var(--accent)' : 'var(--text-light)'}
                              />
                            ))}
                          </div>
                          <p className="review-comment">{rev.comment}</p>
                        </div>
                      ))
                    ) : (
                      <p className="no-reviews">No reviews yet for this product. Be the first to write one!</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
