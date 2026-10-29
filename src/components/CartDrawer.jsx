import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onCheckout
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.salePrice || item.price;
    return acc + price * item.quantity;
  }, 0);

  const shippingThreshold = 150;
  const shippingCost = subtotal >= shippingThreshold || subtotal === 0 ? 0 : 9.99;
  const taxRate = 0.08; // 8% estimated tax
  const taxCost = subtotal * taxRate;
  const total = subtotal + shippingCost + taxCost;

  return (
    <div className="cart-drawer-backdrop animate-fade" onClick={onClose}>
      <div className="cart-drawer animate-slide" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-title-row">
            <ShoppingBag size={20} />
            <h2>Your Bag ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</h2>
          </div>
          <button className="close-drawer-btn" onClick={onClose} aria-label="Close cart">
            <X size={24} />
          </button>
        </div>

        {/* Free Shipping Alert Banner */}
        {subtotal > 0 && (
          <div className="shipping-alert-banner">
            {subtotal >= shippingThreshold ? (
              <p>🎉 You qualify for <strong>Free Shipping</strong>!</p>
            ) : (
              <p>
                Add <strong>${(shippingThreshold - subtotal).toFixed(2)}</strong> more for <strong>Free Shipping</strong>.
              </p>
            )}
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${Math.min((subtotal / shippingThreshold) * 100, 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* Drawer Items Body */}
        <div className="drawer-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart-state">
              <ShoppingBag size={48} className="empty-cart-icon" />
              <h3>Your bag is empty</h3>
              <p>Looks like you haven't added anything to your cart yet. Let's find some amazing products!</p>
              <button className="primary-action-btn continue-shop-btn" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item, index) => {
                const price = item.salePrice || item.price;
                return (
                  <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}-${index}`} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    
                    <div className="cart-item-details">
                      <h4 className="cart-item-name">{item.name}</h4>
                      
                      {/* Meta attributes (size/color) */}
                      {(item.selectedColor || item.selectedSize) && (
                        <div className="cart-item-meta">
                          {item.selectedColor && (
                            <span className="meta-pill">Color: {item.selectedColor}</span>
                          )}
                          {item.selectedSize && (
                            <span className="meta-pill">Size: {item.selectedSize}</span>
                          )}
                        </div>
                      )}
                      
                      <div className="cart-item-pricing">
                        <span className="cart-item-price">${(price * item.quantity).toFixed(2)}</span>
                        {item.quantity > 1 && (
                          <span className="cart-item-unit-price">(${price.toFixed(2)} each)</span>
                        )}
                      </div>

                      {/* Quantity and Actions */}
                      <div className="cart-item-actions">
                        <div className="quantity-selector qty-small">
                          <button 
                            onClick={() => onUpdateQty(item, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span>{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQty(item, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <button 
                          className="delete-item-btn" 
                          onClick={() => onRemoveItem(item)}
                          title="Remove item"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Drawer Footer Checkout Summary */}
        {cartItems.length > 0 && (
          <div className="drawer-footer">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Estimated Shipping</span>
              <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
            </div>
            <div className="summary-row">
              <span>Estimated Tax (8%)</span>
              <span>${taxCost.toFixed(2)}</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-row total-row">
              <span>Estimated Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="primary-action-btn checkout-btn" onClick={onCheckout}>
              <span>Proceed to Checkout</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
