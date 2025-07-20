import React from 'react';

const Bouton = ({ mode, onToggle }) => (
  <div style={{ margin: '1rem 0' }}>
    <button
      onClick={onToggle}
      style={{
        position: 'relative',
        backgroundColor: 'var( --couleur-secondaire)',
        color: 'var(--texte-clair)',
        border: '1px solid rgba(246, 212, 0, 0.3)', 
        borderRadius: '50px', 
        padding: '0.8rem 2rem',
        cursor: 'pointer',
        fontSize: '1rem',
        fontFamily: 'var(--font-main)',
        fontWeight: 'bold',
        textTransform: 'uppercase', 
        letterSpacing: '1px', 
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 2, 2, 0.3)', 
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        zIndex: '1',
        ':hover': {
          backgroundColor: 'rgba(246, 212, 0, 0.25)',
          boxShadow: '0 6px 24px rgba(0, 2, 2, 0.4)',
          transform: 'translateY(-2px)',
          borderColor: 'rgba(246, 212, 0, 0.5)',
        },
        ':active': {
          transform: 'translateY(0)',
        },
      }}
    >
      <span style={{ 
        position: 'relative', 
        zIndex: '2',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <span>Afficher en {mode === 'carte' ? 'liste' : 'carte'}</span>
      </span>
      
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'linear-gradient(45deg, transparent, rgba(246, 212, 0, 0.2), transparent)',
        transform: 'rotate(30deg)',
        transition: 'all 0.5s ease',
        zIndex: '1',
        pointerEvents: 'none',
      }} className="button-light-effect" />
    </button>
  </div>
);

export default Bouton;