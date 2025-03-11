import { useState } from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setisSearchOpen] = useState(false);
  
  const toggleSearchBar = () =>{
    setisSearchOpen(!isSearchOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.mainNavbar}>
      
      <button className={styles.menuButton} onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className={styles.img} viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
        <button className={styles.closeButton} onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
          </svg>
        </button>
        <ul>
          <li><a href="#">Dealio for Business</a></li>
          <li><a href="#">Login to Business Account</a></li>
          <li><a href="#">Explore Deals</a></li>
          <li>
            <a href="#categories" id="categories-btn">Categories</a>
            <ul>
              <li><a href="#">Food & Drink</a></li>
              <li><a href="#">Auto & Home</a></li>
              <li><a href="#">Beauty & Spas</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <div className={styles.title}>Dealio</div>

      
      <div className={styles.searchContainer}>
        <div
          className={`${styles.searchIconContainer} ${isSearchOpen ? styles.iconLeft : ""}`}
          onClick={toggleSearchBar}>

          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={styles.searchIcon} viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>

        </div>



        {/* Conditionally render search bar */}
        {isSearchOpen && (
          <input
            type="text"
            className={styles.searchBar}
            placeholder="Search..."
            onBlur={() => setisSearchOpen(false)} // Close search bar when focus is lost
          />
        )}

      </div>
    </div>
  );
}
