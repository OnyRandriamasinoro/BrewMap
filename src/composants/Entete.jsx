import React from 'react';
import BarreDeRecherche from './BarreDeRecherche';
import logo from '../assets/image/Logo.png';
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
      position: 'fixed', 
      top: 0,           
      left: 0,          
      right: 0,         
      zIndex: 1000,    
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      height: '100px'
    }}>

      <div style={{ 
        marginRight: '2rem',
        flexShrink: 0 
      }}>
        <img 
          src={logo} 
          alt="Logo" 
          style={{ height: '150px' }} 
        />
      </div>
      
      <div style={{ 
        flexGrow: 1,
        maxWidth: '4000px',
        position: 'relative',
      }}>
        <BarreDeRecherche valeur={valeur} onChange={onChange} />
      </div>

      <div style={{ 
        width: 'calc(2rem + 200px)', 
        flexShrink: 0 
      }} />
    </header>
  );
};

export default Entete;