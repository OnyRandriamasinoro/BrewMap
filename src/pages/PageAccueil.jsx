import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Entete from '../composants/Entete';
import ListeBrasseries from './ListeBrasseries';
import CarteBrasseries from './CarteBrasseries';
import Bouton from '../composants/Bouton';
import PiedDePage from '../composants/PiedDePage';

const PageAccueil = () => {
  const [brasseries, setBrasseries] = useState([]);
  const [recherche, setRecherche] = useState('');
  const [mode, setMode] = useState('carte'); // 'carte' ou 'liste'

  useEffect(() => {
    axios
      .get('https://api.openbrewerydb.org/v1/breweries?per_page=50')
      .then((res) => setBrasseries(res.data))
      .catch((err) => console.error(err));
  }, []);

  const brasseriesFiltrees = brasseries.filter((b) =>
    b.name.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: 'var(--fond)'
    }}>
      {/* Contenu principal */}
      <main style={{
        flex: '1',
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '0 1rem 2rem'
      }}>
        <div style={{
          textAlign: 'center',
          margin: '3rem 0'
        }}>
          <Entete valeur={recherche} onChange={setRecherche} />

          <h1 style={{ 
            fontFamily: 'var(--font-main)', 
            color: 'var(--texte-clair)',
            marginBottom: '1.5rem',
            padding: '2rem',
          }}>
            Carte des Brasseries
          </h1>

          {/* Bouton centré */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '1.5rem 0'
          }}>
            <Bouton 
              mode={mode} 
              onToggle={() => setMode(mode === 'carte' ? 'liste' : 'carte')} 
            />
          </div>
        </div>

        {mode === 'carte' ? (
          <CarteBrasseries brasseries={brasseriesFiltrees} />
        ) : (
          <ListeBrasseries brasseries={brasseriesFiltrees} />
        )}
      </main>

      {/* Pied de page */}
      <PiedDePage />
    </div>
  );
};

export default PageAccueil;