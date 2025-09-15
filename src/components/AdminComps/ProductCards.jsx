import React from 'react';
import { TrendingUp, TrendingDown, Package, Star } from 'lucide-react';

const ProductCards = () => {
  // Sample data for best-selling and least-selling products
  const bestSellingProduct = {
    id: 1,
    name: 'کوله پشتی ورزشی',
    sales: 245,
    revenue: '12,500,000',
    rating: 4.8,
    image: '/src/assets/black-aral-30-liter-backpack-model-b145501-1-removebg-preview.png'
  };

  const leastSellingProduct = {
    id: 4,
    name: 'کت زنانه',
    sales: 23,
    revenue: '1,100,000',
    rating: 3.2,
    image: '/src/assets/jacket-2.png'
  };

  const ProductCard = ({ product, type }) => (
    <div className="admin-product-card admin-glass-shimmer md:w-[90%] md:scale-90 md:-translate-y-6">
      <div className="admin-product-card-header">
        <div className="admin-product-card-icon">
          {type === 'best' ? (
            <TrendingUp className="w-5 h-5" />
          ) : (
            <TrendingDown className="w-5 h-5" />
          )}
        </div>
        <div className="admin-product-card-type">
          {type === 'best' ? 'پرفروش' : 'کم فروش'}
        </div>
      </div>
      
      <div className="admin-product-card-image">
        <img 
          src={product.image} 
          alt={product.name}
          className="admin-product-image"
        />
      </div>
      
      <div className="admin-product-card-content">
        <h3 className="admin-product-name">{product.name}</h3>
        
        <div className="admin-product-stats">
          <div className="admin-product-stat">
            <Package className="w-4 h-4" />
            <span>{product.sales} فروش</span>
          </div>
          
          <div className="admin-product-stat">
            <Star className="w-4 h-4" />
            <span>{product.rating}</span>
          </div>
        </div>
        
        <div className="admin-product-revenue">
          <span className="admin-product-revenue-label">درآمد:</span>
          <span className="admin-product-revenue-value">{product.revenue} تومان</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="admin-product-cards-container">
      <div className="admin-product-cards-section">
        <h2 className="admin-product-cards-title">
          <TrendingUp className="w-6 h-6" />
          محصولات پرفروش و کم فروش
        </h2>
        <div className="admin-product-cards-grid">
          <ProductCard product={bestSellingProduct} type="best" />
          <ProductCard product={leastSellingProduct} type="least" />
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
