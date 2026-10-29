import React, { useState } from 'react';
import { CreditCard, Truck, ShoppingBag, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function CheckoutPage({ cartItems, onBackToShop, onClearCart }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expDate: '',
    cvv: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card', 'paypal', 'apple'
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setIsSubmitted(true);
    setOrderNumber(`LC-${Math.floor(100000 + Math.random() * 900000)}`);
  };

  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.salePrice || item.price;
    return acc + price * item.quantity;
  }, 0);

  const shippingCost = subtotal >= 150 ? 0 : 9.99;
  const taxCost = subtotal * 0.08;
  const total = subtotal + shippingCost + taxCost;

  if (isSubmitted) {
    return (
      <div className="checkout-success-container animate-slide">
        <div className="success-card">
          <CheckCircle2 size={64} className="success-icon" />
          <h1>Order Placed Successfully!</h1>
          <p className="order-number-text">Order Number: <strong>{orderNumber}</strong></p>
          <p className="success-message">
            Thank you for shopping with LUXECART, <strong>{formData.fullName}</strong>. We've sent a confirmation email to <strong>{formData.email}</strong> with details of your order.
          </p>
          <div className="success-actions">
            <button 
              className="primary-action-btn shop-again-btn" 
              onClick={() => {
                onClearCart();
                onBackToShop();
              }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page-container container animate-fade">
      {/* Back Button */}
      <button className="back-to-shop-btn" onClick={onBackToShop}>
        <ArrowLeft size={16} />
        <span>Back to Shop</span>
      </button>

      <div className="checkout-layout-grid">
        {/* Left Column - Forms */}
        <div className="checkout-forms-section">
          <form onSubmit={handleSubmit} className="checkout-form">
            
            {/* Shipping details */}
            <div className="form-group-section">
              <div className="section-title-row">
                <Truck size={20} />
                <h2>Shipping Address</h2>
              </div>
              <div className="form-fields-grid">
                <div className="field-full">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="field-full">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="johndoe@example.com"
                  />
                </div>
                <div className="field-full">
                  <label htmlFor="address">Street Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="123 Luxury Ave"
                  />
                </div>
                <div>
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Metropolis"
                  />
                </div>
                <div>
                  <label htmlFor="zipCode">Zip Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    placeholder="10001"
                  />
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="form-group-section payment-section-group">
              <div className="section-title-row">
                <CreditCard size={20} />
                <h2>Payment Method</h2>
              </div>

              {/* Payment Selectors */}
              <div className="payment-selectors">
                <button
                  type="button"
                  className={`payment-selector-btn ${paymentMethod === 'card' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  Credit Card
                </button>
                <button
                  type="button"
                  className={`payment-selector-btn ${paymentMethod === 'paypal' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('paypal')}
                >
                  PayPal
                </button>
                <button
                  type="button"
                  className={`payment-selector-btn ${paymentMethod === 'apple' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('apple')}
                >
                  Apple Pay
                </button>
              </div>

              {paymentMethod === 'card' && (
                <div className="form-fields-grid card-details-grid animate-fade">
                  <div className="field-full">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required={paymentMethod === 'card'}
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="expDate">Expiry Date</label>
                    <input
                      type="text"
                      id="expDate"
                      name="expDate"
                      value={formData.expDate}
                      onChange={handleChange}
                      required={paymentMethod === 'card'}
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      required={paymentMethod === 'card'}
                      placeholder="123"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'paypal' && (
                <div className="payment-info-message animate-fade">
                  <p>You will be redirected to PayPal's secure portal to authorize this purchase upon submitting your order.</p>
                </div>
              )}

              {paymentMethod === 'apple' && (
                <div className="payment-info-message animate-fade">
                  <p>Pay instantly using authentication on your linked Apple device.</p>
                </div>
              )}
            </div>

            <button type="submit" className="primary-action-btn place-order-btn">
              Place Order - ${total.toFixed(2)}
            </button>
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div className="checkout-summary-section">
          <div className="summary-card">
            <div className="card-header">
              <ShoppingBag size={18} />
              <h2>Order Summary</h2>
            </div>
            
            <div className="checkout-items-list">
              {cartItems.map((item, index) => {
                const price = item.salePrice || item.price;
                return (
                  <div key={`${item.id}-${index}`} className="checkout-item">
                    <img src={item.image} alt={item.name} />
                    <div className="checkout-item-info">
                      <h4>{item.name}</h4>
                      {item.selectedColor && (
                        <p className="meta-info">Color: {item.selectedColor}</p>
                      )}
                      {item.selectedSize && (
                        <p className="meta-info">Size: {item.selectedSize}</p>
                      )}
                      <p className="qty-price">Qty: {item.quantity} &middot; ${(price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="summary-divider" />
            
            <div className="summary-costs">
              <div className="cost-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="cost-row">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="cost-row">
                <span>Tax (8%)</span>
                <span>${taxCost.toFixed(2)}</span>
              </div>
              <div className="summary-divider" />
              <div className="cost-row total-row">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
