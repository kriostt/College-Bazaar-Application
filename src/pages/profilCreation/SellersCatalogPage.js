import React from 'react';
import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const SellersCatalogPage = () => {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      price: '$20',
      image: require('../../images/tumbler.jpg'),
      rating: 4.5,
      reviews: [
        { id: 1, user: 'John Doe', comment: 'Great product! I love it!' },
        { id: 2, user: 'Jane Smith', comment: 'Excellent quality and fast delivery.' },
      ],
    },
    {
      id: 2,
      title: 'Product 2',
      price: '$30',
      image: require('../../images/jacket.jpg'),
      rating: 4.0,
      reviews: [
        { id: 3, user: 'Alice Johnson', comment: 'Nice design and comfortable.' },
        { id: 4, user: 'Bob Anderson', comment: 'Good value for money.' },
      ],
    },
    // Add more products as needed
  ];

  // Calculate average rating and total number of reviews for the seller
  const totalRatings = products.reduce((acc, product) => acc + product.rating, 0);
  const averageRating = totalRatings / products.length;
  const totalReviews = products.reduce((acc, product) => acc + product.reviews.length, 0);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Seller Ratings Summary</h5>
              <p className="card-text">Average Rating: {averageRating.toFixed(1)}</p>
              <p className="card-text">Total Reviews: {totalReviews}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className='nav-link' href="http://localhost:3000/myprofile">
              Items
            </a>
          </li>
          <li className="nav-item">
            <a className='nav-link' href="http://localhost:3000/categories">
              Categories
            </a>
          </li>
          <li className="nav-item">
            <a className='nav-link' href="http://localhost:3000/reviews">
              Reviews
            </a>
          </li>
        </ul>
      </div>

      <div className="container mt-5">
        {products.map(product => (
          <div key={product.id} className="col-md-12 mb-4">
            <div className="card" style={{ height: '300px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={product.image} alt={product.title} className="card-img-top"   style={{ objectFit: 'cover', height: '100%' }}/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Price: {product.price}</p>
                    <p className="card-text">Rating: {product.rating}</p>
                    <div className="reviews">
                      <h6>Reviews:</h6>
                      <ul className="list-group">
                        {product.reviews.map(review => (
                          <li key={review.id} className="list-group-item">
                            <p><strong>{review.user}:</strong> {review.comment}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellersCatalogPage;
