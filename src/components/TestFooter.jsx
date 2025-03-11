import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState(null);

  // Function to get the user's location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          alert("Location access denied");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <>
      <footer className="text-white text-center">
        <div className="container-fluid">
          <div className="">
            <div className="col-auto">
              <Button
                style ={{display:"flex", alignItems: "center", borderRadius: "18px", backgroundColor: "rgb(239, 159, 188)", border: "none", padding: "8px", paddingLeft: "15px", paddingRight: "12px"}}
                // variant="success"
                onClick={() => {
                  setShowModal(true);
                  getLocation();
                }}
              >
                Find Deals Near Me
                <img
                  src="/images/Map pin.png"
                  className="ms-2"
                  style={{ height: "20px", width: "20px", filter: "brightness(0), invert(1)"}}
                  alt="Map Pin"
                />
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal to show map */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Location Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {location ? (
            <div>
              <h5>Deals in your neighborhood</h5>
              <p>Menchies: {location.latitude}</p>
              <p>Pizza: {location.longitude}</p>
              {/* Optionally, you can embed a map here using Google Maps or any map service */}
              <iframe
                src={`https://www.google.com/maps?q=${location.latitude},${location.longitude}&hl=es;z=14&output=embed`}
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen
                title="Map"
              ></iframe>
            </div>
          ) : (
            <p>Loading your location...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
