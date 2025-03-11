import React from "react";
import { Carousel } from "react-bootstrap";
import styles from './TestSlider.module.css';

const products = [
  {
    id: 1,
    name: "Pizza Twist",
    description: "7 Days a week, cannot be combined with other offers.",
    price: "20% Off $15 or More",
    image: "/images/pizza.jpeg",
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
  {
    id: 4,
    name: "A.B.O. Comix",
    description: "Does not apply to original art pieces, though can be used for prints.",
    price: "20% Off Items in Store",
    image: "/images/ABO.png",
    rating: 4.5,
    reviews: 850,
  },
  {
    id: 5,
    name: "Local Driving School, Inc",
    description: "Free Driver Ed with 6 Hrs Behind The Wheel Training",
    price: "Can not Combined with other offers.",
    image: "/images/local_driving.webp",
    rating: 4.5,
    reviews: 850,
  },
  {
    id: 6,
    name: "Artistic Picture Framing",
    description: "All discounted orders must include a custom frame.",
    price: "10% off 3 or more orders, 15% off 5 or more orders, 20% off 20 or more orders",
    image: "/images/pix_framing.jpg",
    rating: 4.5,
    reviews: 850,
  },
  {
    id: 7,
    name: "Sodoi Coffee Tasting House",
    description: "Offer only good after 3pm every day.",
    price: "20% Off minimum order of $10 or more",
    image: "/images/sodoi.jpeg",
    rating: 4.5,
    reviews: 850,
  },
  {
    id: 8,
    name: "Uchiwa Ramen",
    description: "Excludes Kids Ramen items.",
    price: "Purchase 2 entrees and receive a free order of pork or vegetable gyoza.",
    image: "/images/ramen.png",
    rating: 4.5,
    reviews: 850,
  },
];


const TestSlider = () => {
  return (
    <div className="product-container">
      {/* Grid for larger screens */}
      
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3 className="fw-bold fs-6">{product.name}</h3>
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid product-image"
            />
            <p className="text-muted text-center" style={{fontSize: "14px"}}>{product.description}</p>
            <p className="fw-bold" style={{fontSize: "14px"}}>{product.price}</p>
            <button className="btn btn-dark" style={{ width: "150px", borderRadius:"30px", backgroundColor: "rgb(101, 195, 200)", border:"none"}}>
              Get Deal
            </button>
          </div>
        
        ))}
      </div>

      {/* Carousel for smaller screens */}
      <div className="product-carousel">
        <Carousel interval={2000} controls={false}>
          {products.map((product) => (
            <Carousel.Item key={product.id}>
              <div className="d-flex flex-column align-items-center text-center p-12 card-style">
                <h3 className="fw-bold">{product.name}</h3>
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid product-image"
                />
                <p className="text-muted text-center">{product.description}</p>
                <p className="fw-bold">{product.price}</p>
                <button className="btn btn-dark" style={{ width: "200px" }}>
                  Get Deal
                </button>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* CSS Styles */}
      <style>
        {`
          /* Default: Grid layout for larger screens */
          .product-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .product-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
            width: 90%;
            max-width: 1200px;
          }

          .product-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background: #fff;
            padding: 15px;
            text-align: center;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            margin-top: 10px;
          }

          .product-image {
            width: 300px;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
          }
          

          /* Hide carousel on larger screens */
          .product-carousel {
            display: none;
            // width: 100%;
          }


          /* Responsive Design: Show slider on small screens */
          @media (max-width: 768px) {
            .product-grid {
              display: none;
            }
            .product-carousel {
              display: block;
            }

            .card-style {
              background-color: #FAFAFA; /* Light Gray */
              border-radius: 12px; /* Rounded Corners */
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Subtle Shadow */
              padding: 10px;
            }

            .product-image {
              width: 500px;
              height: 200px;
              object-fit: cover;
              border-radius: 10px;
            }
        
            .carousel-indicators button {
              border-radius: 50% !important;
              width: 10px !important; 
              height: 10px !important; 
              background-color: #808080 !important; 
              transform: translateY(50px) !important;
        }
          }
        `}
      </style>
    </div>
  );
};

export default TestSlider;
