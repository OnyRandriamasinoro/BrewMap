import React from 'react';
import '../assets/styles/charte.css';

const PiedDePage = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--couleur-fonce)',
      color: 'var(--texte-clair)',
      padding: '2rem 1rem',
      marginTop: '2rem',
      textAlign: 'center',
      fontFamily: 'var(--font-secondary)',
      fontSize: '0.8rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <a href="/mentions-legales" style={{ color: 'inherit', textDecoration: 'none' }}>
            Mentions légales
          </a>
          <a href="/politique-confidentialite" style={{ color: 'inherit', textDecoration: 'none' }}>
            Politique de confidentialité
          </a>
          <a href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
            Contact
          </a>
          <a href="/a-propos" style={{ color: 'inherit', textDecoration: 'none' }}>
            À propos
          </a>
          © {new Date().getFullYear()} Brew Map- Tous droits réservés
        </div>
      </div>
    </footer>
  );
};

export default PiedDePage;