import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to access passed state
import { Row, Col, Card } from 'react-bootstrap';

const SearchResultsPage = () => {
  const location = useLocation();
  const { query, results } = location.state || {}; // Get the query and results from location state

  return (
    <div className="container mt-3">
      <h1>Search Results for "{query}"</h1>
      {results && results.length > 0 ? (
        <Row>
          {results.map((product) => (
            <Col key={product.id} md={4} sm={6}>
              <Card className="mb-3">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text><strong>{product.price}</strong></Card.Text>
                  <Card.Text>Rating: {product.rating} ({product.reviews} reviews)</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No products found matching "{query}"</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
