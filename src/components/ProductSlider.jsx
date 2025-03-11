import React from "react";
import { Carousel } from "react-bootstrap";

const products = [
  {
    id: 1,
    name: "Pizza Twist",
    description: "7 Days a week, can not combined with other offer.",
    price: "20% Off $15 or More",
    image: "/images/pizza.jpeg", // Replace with actual image URL
    rating: 4,
    reviews: 969,
  },
  {
    id: 2,
    name: "Menchie's Berkeley",
    description: "Minimum 10 Ounce Purchase. An Average Size Frozen Yogurt",
    price: "25% (Almost $2) Off Menchie's Froyo",
    image: "/images/menchies_new.jpg",
    rating: 5,
    reviews: 1200,
  },
  {
    id: 3,
    name: "Central Florist",
    description: "Good with $50 order or more",
    price: "Get 20% off any Floral Arrangement",
    image: "/images/florist.jpeg",
    rating: 4.5,
    reviews: 850,
  },
];

const ProductSlider = () => {
  return (
    <div>
      <Carousel interval={3000} controls={false}>
        {products.map((product) => (
          <Carousel.Item key={product.id}>
            <div className="d-flex flex-column align-items-center p-4">
              <h3 className="fw-bold">{product.name}</h3>
              <img src={product.image} alt={product.name} className="img-fluid" style={{ width: "350px", height: "250px", objectFit: "cover" }}/>
              <p className="text-muted text-center">{product.description}</p>
              <p className="fw-bold">{product.price}</p>
              <button className="btn btn-dark" style={{ width: "200px" }}>Get Deal </button>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <style>
      {`
        .carousel-indicators button {
          border-radius: 50% !important;
          width: 10px !important; 
          height: 10px !important; 
          background-color: #808080 !important; 
          transform: translateY(18px) !important;
        }
      `}
      </style>
    </div>
  );
};

export default ProductSlider;
