import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import "../../style/dashboard/UserDashboard.css"

const containerStyle = {
  width: '100%',
  height: '400px',
};

const NearbyHospitals = () => {
  const [location, setLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  useEffect(() => {
    if (location && window.google && window.google.maps && window.google.maps.places && window.google.maps.places.PlacesService) {
        const service = new window.google.maps.places.PlacesService(document.createElement('div'));
        service.nearbySearch({
          location,
          radius: 5000,
          type: ['hospital', 'clinic'],
        }, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setHospitals(results);
          }
        });
      } else {
        console.log('Google Maps API is not yet loaded');
      }
  }, [location]);

  return (
    <div className="map-container">
        <div className="col-md-8">
            <div className="card2-header bg-primary text-white">
              <h5 className="mb-0">Nearby Hospitals and Clinics</h5>
            </div>
            <div className="card2-body">
              <LoadScript
              googleMapsApiKey={"AIzaSyBCb1-4lDiw4EsMtDRhIX7v-mevvDUtuVY"}
              >
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={location}
                  zoom={14}
                >
                  {hospitals.map(hospital => (
                    <Marker
                      key={hospital.place_id}
                      position={{
                        lat: hospital.geometry.location.lat(),
                        lng: hospital.geometry.location.lng(),
                      }}
                      title={hospital.name}
                    />
                  ))}
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
  );
};

export default NearbyHospitals;
