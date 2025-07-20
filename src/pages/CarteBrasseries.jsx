import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const CarteBrasseries = ({ brasseries }) => {
  const customIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
    shadowUrl,
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <div style={{ position: 'relative', height: '600px', borderRadius: '12px', overflow: 'hidden' }}>
      <MapContainer 
        center={[39.8283, -98.5795]} 
        zoom={4} 
        style={{ height: '100%', width: '100%' }}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {brasseries
          .filter(b => b.latitude && b.longitude)
          .map(b => (
            <Marker 
              key={b.id} 
              position={[parseFloat(b.latitude), parseFloat(b.longitude)]}
              icon={customIcon}
            >
              <Popup className="custom-popup">
                <div style={{
                  padding: '0.5rem',
                  fontFamily: 'var(--font-secondaire)'
                }}>
                  <h3 style={{
                    margin: '0 0 0.5rem 0',
                    color: 'var(--couleur-primaire)',
                    fontSize: '1.1rem'
                  }}>
                    {b.name}
                  </h3>
                  <p style={{ margin: '0.3rem 0', fontSize: '0.9rem' }}>
                    {b.street && <>{b.street},<br /></>}
                    {b.city}, {b.state}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '0.8rem'
                  }}>
                    <a href={b.website_url} target="_blank" rel="noreferrer" style={{
                      background: 'var(--couleur-primaire)',
                      color: 'var(--texte-fonce)',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      fontWeight: 'bold'
                    }}>
                      website
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default CarteBrasseries;