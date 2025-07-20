import React from 'react';
import BarreDeRecherche from './BarreDeRecherche';
import '../assets/styles/charte.css';

const Entete = ({ valeur, onChange }) => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      backgroundColor: 'var(--fond)',
      borderBottom: '1px solid var(--couleur-secondaire)',
      position: 'relative' // Ajouté pour un meilleur contrôle
    }}>
      {/* Logo - remplace par ton propre chemin */}
      <div style={{ 
        marginRight: '2rem',
        flexShrink: 0 // Empêche le rétrécissement du logo
      }}>
        <img 
          src="/chemin/vers/logo.png" 
          alt="Logo" 
          style={{ height: '50px' }} 
        />
      </div>
      
      <div style={{ 
        flexGrow: 1,
        maxWidth: '400px',
        marginLeft: '25em', 
        position: 'relative',
      }}>
        <BarreDeRecherche 
          valeur={valeur} 
          onChange={onChange} 
        />
      </div>

      {/* Espace vide pour équilibrer (optionnel) */}
      <div style={{ 
        width: 'calc(2rem + 50px)', // Correspond à marginRight du logo + largeur logo
        flexShrink: 0 
      }} />
    </header>
  );
};

export default Entete;