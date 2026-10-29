import React, { useState } from 'react';
import { Mail, MessageCircle, Camera, Send, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand Col */}
        <div className="footer-col brand-col">
          <div className="logo footer-logo">
            <span>LUXE</span><span>CART</span>
          </div>
          <p className="footer-tagline">
            Experience premium curated lifestyles. We bring together modern aesthetics, utility, and craftsmanship to design everyday essentials.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook"><MessageCircle size={18} /></a>
            <a href="#" className="social-link" aria-label="Instagram"><Camera size={18} /></a>
            <a href="#" className="social-link" aria-label="Twitter"><Send size={18} /></a>
          </div>
        </div>

        {/* Links Col 1 */}
        <div className="footer-col">
          <h3>Shop</h3>
          <ul>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Weekly Offers</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>

        {/* Links Col 2 */}
        <div className="footer-col">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">FAQ & Help</a></li>
            <li><a href="#">Warranty Details</a></li>
          </ul>
        </div>

        {/* Newsletter Col */}
        <div className="footer-col newsletter-col">
          <h3>Stay Updated</h3>
          <p>Subscribe to receive 15% off your first order and stay in the loop on premium releases.</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <div className="input-with-button">
              <Mail size={16} className="newsletter-icon" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                <ArrowRight size={18} />
              </button>
            </div>
            {subscribed && (
              <p className="subscription-success animate-fade">
                Thanks for subscribing! Check your inbox.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {new Date().getFullYear()} LUXECART Inc. All rights reserved.</p>
          <div className="payment-badges">
            <span className="payment-badge">Visa</span>
            <span className="payment-badge">Mastercard</span>
            <span className="payment-badge">Amex</span>
            <span className="payment-badge">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
