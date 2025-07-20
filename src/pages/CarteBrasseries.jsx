import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const CarteBrasseries = ({ brasseries, selectedBrasserie, onMarkerClick }) => {
  const mapRef = useRef(null);
  
  const customIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const selectedIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [30, 46],
    iconAnchor: [15, 46],
    popupAnchor: [1, -34],
  });

  const calculateBounds = () => {
    const validBrasseries = brasseries.filter(b => b.latitude && b.longitude);
    if (validBrasseries.length === 0) return null;
    
    return L.latLngBounds(
      validBrasseries.map(b => [
        parseFloat(b.latitude),
        parseFloat(b.longitude)
      ])
    );
  };

  useEffect(() => {
    if (mapRef.current && selectedBrasserie && selectedBrasserie.latitude && selectedBrasserie.longitude) {
      const position = [
        parseFloat(selectedBrasserie.latitude), 
        parseFloat(selectedBrasserie.longitude)
      ];
      mapRef.current.flyTo(position, 14, {
        duration: 1,
        easeLinearity: 0.25
      });
      
      const marker = mapRef.current._layers[selectedBrasserie.id];
      if (marker) {
        marker.openPopup();
      }
    }
  }, [selectedBrasserie]);

  return (
    <div style={{ 
      position: 'relative', 
      height: '600px', 
      borderRadius: '12px', 
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    }}>
      <MapContainer 
        center={[39.8283, -98.5795]}
        zoom={4}
        style={{ height: '100%', width: '100%' }}
        whenCreated={(map) => { 
          mapRef.current = map;
          setTimeout(() => {
            const bounds = calculateBounds();
            if (bounds) {
              map.flyToBounds(bounds, { padding: [50, 50] });
            }
          }, 100);
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {brasseries
          .filter(b => b.latitude && b.longitude)
          .map(b => {
            const isSelected = selectedBrasserie?.id === b.id;
            return (
              <Marker 
                key={b.id}
                id={b.id}
                position={[parseFloat(b.latitude), parseFloat(b.longitude)]}
                icon={isSelected ? selectedIcon : customIcon}
                eventHandlers={{
                  click: () => onMarkerClick(b),
                }}
              >
                <Popup className="custom-popup">
                  <div style={{
                    padding: '0.8rem',
                    fontFamily: 'var(--font-secondaire)',
                    minWidth: '220px'
                  }}>
                    <h3 style={{
                      margin: '0 0 0.5rem 0',
                      color: 'var(--couleur-primaire)',
                      fontSize: '1.2rem',
                      fontWeight: 'bold'
                    }}>
                      {b.name}
                    </h3>
                    <div style={{ margin: '0.5rem 0' }}>
                      {b.street && <p style={{ margin: '0.3rem 0', fontSize: '0.9rem' }}>{b.street}</p>}
                      <p style={{ margin: '0.3rem 0', fontSize: '0.9rem' }}>
                        {b.city}{b.state && `, ${b.state}`}
                      </p>
                    </div>
                    {b.website_url && (
                      <a 
                        href={b.website_url} 
                        target="_blank" 
                        rel="noreferrer" 
                        style={{
                          display: 'inline-block',
                          background: 'var(--couleur-primaire)',
                          color: 'var(--texte-fonce)',
                          padding: '0.5rem 1rem',
                          borderRadius: '4px',
                          textDecoration: 'none',
                          fontSize: '0.85rem',
                          fontWeight: 'bold',
                          marginTop: '0.5rem',
                          transition: 'all 0.2s ease',
                          ':hover': {
                            background: 'var(--couleur-secondaire)'
                          }
                        }}
                      >
                        Visiter le site
                      </a>
                    )}
                  </div>
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>

      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: 'var(--couleur-secondaire)',
        padding: '8px 12px',
        borderRadius: '4px',
        zIndex: 1000,
        fontSize: '0.9rem',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        fontFamily: 'var(--font-secondaire)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <span>
          {brasseries.filter(b => b.latitude && b.longitude).length} brasseries
        </span>
      </div>
    </div>
  );
};

export default CarteBrasseries;