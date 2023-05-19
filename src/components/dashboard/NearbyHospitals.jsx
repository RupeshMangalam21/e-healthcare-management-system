import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import '../../style/dashboard/UserDashboard.css';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const NearbyHospitals = () => {
  const [location, setLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBTuI9DITbyWfwCDrgY-eC5pAPi2S0S52A',
    libraries: ['places'],
  });

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
      });
    } else {
      console.log('Geolocation is not supported');
    }
  }, []);

  useEffect(() => {
    if (location && isLoaded && loading) {
      setLoading(false); // Set loading state to false once the API is loaded
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));
      service.nearbySearch(
        {
          location,
          radius: 5000,
          type: ['hospital', 'clinic'],
        },
        (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setHospitals(results);
          }
        }
      );
    }
  }, [location, isLoaded, loading]);

  const handleMarkerClick = (hospital) => {
    const { lat, lng } = hospital.geometry.location;
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
  };

  return (
      <div className="map-container">
        <div className="card2-header bg-primary text-white">
          <h5 className="mb-0">Nearby Hospitals and Clinics</h5>
        </div>
        <div className="card2-body">
          <LoadScript googleMapsApiKey="AIzaSyBTuI9DITbyWfwCDrgY-eC5pAPi2S0S52A" libraries={['places']} onLoad={() => {}}>
            {isLoaded && !loading ? ( // Render the GoogleMap only when API is loaded and not in the loading state
              <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={14}>
                {hospitals.map((hospital) => (
                  <Marker
                    key={hospital.place_id}
                    position={{
                      lat: hospital.geometry.location.lat(),
                      lng: hospital.geometry.location.lng(),
                    }}
                    title={hospital.name}
                    onClick={() => handleMarkerClick(hospital)}
                  />
                ))}
              </GoogleMap>
            ) : (
              <div>Loading Google Maps...</div>
            )}
          </LoadScript>
        </div>
      </div>
  );
};

export default NearbyHospitals;



// AIzaSyBTuI9DITbyWfwCDrgY-eC5pAPi2S0S52A