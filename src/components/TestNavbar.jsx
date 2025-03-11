import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button, Container, Dropdown } from "react-bootstrap";
import { BsSearch, BsList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styles from "./TestNavbar.module.css"; // Import the CSS module

const TestNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  // Sample product data
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
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const results = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.price.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", { state: { query: searchQuery, results: filteredProducts } });
  };

  return (
    <>
      {/* Navbar */}
      
        <Navbar className={`${styles.navbar} shadow-sm py-2`}>
          
            {/* Hamburger Icon */}
            <Button variant="light" className="me-2" onClick={toggleSidebar}>
              <BsList size={18} />
            </Button>

            {/* Brand (Hidden on Small Screens) */}
            <Navbar.Brand href="http://localhost:5173/" className="fw-bold text-success ms-1 d-none d-lg-block">
              Dealio
            </Navbar.Brand>

            
            <Form className=" d-lg-flex flex-grow-1 mx-12" onSubmit={handleSearchSubmit}>
              <div className="input-group">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="border-success"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <Button variant="success" type="submit">
                  <BsSearch />
                </Button>
              </div>
            </Form>

            
            <Nav className="ms-3 d-flex ">
              <Dropdown className="position-static">
                <Dropdown.Toggle variant="light" size="sm">Sign In</Dropdown.Toggle>
                <Dropdown.Menu className={`${styles.customDropdown} dropdown-menu-end`}>
                  <Dropdown.Item href="#">Sign In</Dropdown.Item>
                  <Dropdown.Item href="#">Register</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          
        </Navbar>
      

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
        <button className={styles.closeButton} onClick={toggleSidebar}>
          &times;
        </button>

        {/* Sidebar Links */}
        <ul>
          <li><a href="#">Dealio for Business</a></li>
          <li><a href="#">Login to Business Account</a></li>
          <li><a href="#">Explore Deals</a></li>
          <li>
            <a href="#categories">Categories</a>
            <ul>
              <li><a href="#">Food & Drink</a></li>
              <li><a href="#">Auto & Home</a></li>
              <li><a href="#">Beauty & Spas</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TestNavbar;


// import React, { useState } from "react";
// import { Navbar, Nav, Form, FormControl, Button, Container, Dropdown } from "react-bootstrap";
// import { BsSearch, BsList } from "react-icons/bs";
// import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
// import styles from "./TestNavbar.module.css"; // Import the CSS module

// const TestNavbar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
//   const [filteredProducts, setFilteredProducts] = useState([]); // State to hold the filtered results

//   const navigate = useNavigate(); // Initialize useNavigate hook

//   // Sample product data
//   const products = [
//     {
//       id: 1,
//       name: "Pizza Twist",
//       description: "7 Days a week, cannot be combined with other offers.",
//       price: "20% Off $15 or More",
//       image: "/images/pizza.jpeg",
//       rating: 4,
//       reviews: 969,
//     },
//     {
//       id: 2,
//       name: "Menchie's Berkeley",
//       description: "Minimum 10 Ounce Purchase. An Average Size Frozen Yogurt",
//       price: "25% (Almost $2) Off Menchie's Froyo",
//       image: "/images/menchies_new.jpg",
//       rating: 5,
//       reviews: 1200,
//     },
//     {
//       id: 3,
//       name: "Central Florist",
//       description: "Good with $50 order or more",
//       price: "Get 20% off any Floral Arrangement",
//       image: "/images/florist.jpeg",
//       rating: 4.5,
//       reviews: 850,
//     },
//     {
//       id: 4,
//       name: "A.B.O. Comix",
//       description: "Does not apply to original art pieces, though can be used for prints.",
//       price: "20% Off Items in Store",
//       image: "/images/ABO.png",
//       rating: 4.5,
//       reviews: 850,
//     },
//     {
//       id: 5,
//       name: "Local Driving School, Inc",
//       description: "Free Driver Ed with 6 Hrs Behind The Wheel Training",
//       price: "Can not Combined with other offers.",
//       image: "/images/local_driving.webp",
//       rating: 4.5,
//       reviews: 850,
//     },
//     {
//       id: 6,
//       name: "Artistic Picture Framing",
//       description: "All discounted orders must include a custom frame.",
//       price: "10% off 3 or more orders, 15% off 5 or more orders, 20% off 20 or more orders",
//       image: "/images/pix_framing.jpg",
//       rating: 4.5,
//       reviews: 850,
//     },
//   ];

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   // Handle input change and filter products
//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);

//     // Filter the products based on the search query
//     const results = products.filter((product) =>
//       product.name.toLowerCase().includes(query.toLowerCase()) ||
//       product.description.toLowerCase().includes(query.toLowerCase()) ||
//       product.price.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredProducts(results);
//   };

//   // Handle search submit and navigate to the Search Results page
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     navigate("/search", { state: { query: searchQuery, results: filteredProducts } }); // Navigate to search page with query and results
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <Navbar className="shadow-sm py-2 w-100 d-flex flex-row justify-content-evenly">
//         <Container>
//           {/* Hamburger Icon */}
//           <Button variant="light" className="me-2 d-lg-none" onClick={toggleSidebar}>
//             <BsList size={24} />
//           </Button>

//           {/* Brand */}
//           <Navbar.Brand href="#" className="fw-bold text-success ms-1">Dealio</Navbar.Brand>

//           {/* Search Bar (Hidden on Mobile) */}
//           <Form className="d-none d-lg-flex flex-grow-1 mx-3" onSubmit={handleSearchSubmit}>
//             <div className="input-group">
//               <FormControl
//                 type="search"
//                 placeholder="Search for products or deals"
//                 className="border-success"
//                 value={searchQuery}
//                 onChange={handleSearchChange} // Update state on input change
//               />
//               <Button variant="success" type="submit">
//                 <BsSearch />
//               </Button>
//             </div>
//           </Form>

//           {/* Icons */}
//           <Nav className="ms-auto d-flex align-items-center">
//             <Button variant="light" className="d-lg-none d-none d-md-block">
//               <BsSearch size={20} />
//             </Button>
//             <Dropdown className="position-static">
//               <Dropdown.Toggle variant="light">Sign In</Dropdown.Toggle>
//               <Dropdown.Menu className={`${styles.customDropdown} dropdown-menu-end`}>
//                 <Dropdown.Item href="#">Sign In</Dropdown.Item>
//                 <Dropdown.Item href="#">Register</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Nav>
//         </Container>
//       </Navbar>

//       {/* Sidebar */}
//       <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
//         <button className={styles.closeButton} onClick={toggleSidebar}>
//           &times;
//         </button>

//         {/* Sidebar Links */}
//         <ul>
//           <li><a href="#">Dealio for Business</a></li>
//           <li><a href="#">Login to Business Account</a></li>
//           <li><a href="#">Explore Deals</a></li>
//           <li>
//             <a href="#categories">Categories</a>
//             <ul>
//               <li><a href="#">Food & Drink</a></li>
//               <li><a href="#">Auto & Home</a></li>
//               <li><a href="#">Beauty & Spas</a></li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default TestNavbar;




