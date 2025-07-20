import React from 'react';
import '../assets/styles/charte.css';

const BarreDeRecherche = ({ valeur, onChange }) => {
  return (
    <div style={{ 
      position: 'relative',
      margin: '2rem 0',
      maxWidth: '600px',
      width: '100%'
    }}>
      <input
        type="text"
        placeholder="Rechercher une brasserie..."
        value={valeur}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '18px 24px 18px 50px',
          border: '2px solid rgba(246, 212, 0, 0.3)',
          borderRadius: '50px',
          backgroundColor: 'rgba(0, 2, 2, 0.5)',
          color: 'var(--texte-clair)',
          fontFamily: 'var(--font-main)',
          fontSize: '16px',
          outline: 'none',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          ':focus': {
            borderColor: 'var(--couleur-primaire)',
            boxShadow: '0 0 0 3px rgba(246, 212, 0, 0.2)'
          }
        }}
      />
      <svg
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '20px',
          height: '20px',
          color: 'var(--couleur-primaire)'
        }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
};

export default BarreDeRecherche;