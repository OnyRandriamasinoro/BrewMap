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
  const [mode, setMode] = useState('liste');
  const [selectedBrasserie, setSelectedBrasserie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBrasseries = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://api.openbrewerydb.org/v1/breweries');
        setBrasseries(response.data);
      } catch (err) {
        console.error('Erreur lors du chargement des brasseries:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBrasseries();
  }, []);

  const brasseriesFiltrees = brasseries.filter((b) => {
    if (!recherche) return true;
    
    const searchTerm = recherche.toLowerCase().trim();
  
    const searchString = [
      b.name,
      b.city,
      b.state,
      b.street,
      b.address_1,
      b.address_2,
      b.brewery_type
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    
    return searchString.includes(searchTerm);
  });

  const handleBrasserieSelect = (brasserie) => {
    setSelectedBrasserie(brasserie);
    setMode('carte');
  };

  const handleBackToList = () => {
    setSelectedBrasserie(null);
    setMode('liste');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: 'var(--fond)'
    }}>
      <Entete valeur={recherche} onChange={setRecherche} />
      
      <main style={{
        flex: '1',
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '180px 1rem 2rem 1rem',
      }}>
        {isLoading ? (
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            color: 'var(--texte-clair)'
          }}>
            Chargement des brasseries...
          </div>
        ) : (
          <>
            <div style={{
              textAlign: 'center',
              margin: '0 0 2rem 0',
              position: 'relative'
            }}>
              <h1 style={{ 
                fontFamily: 'var(--font-main)', 
                color: 'var(--texte-clair)',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                margin: '0 0 1.5rem 0',
                padding: '1rem 0',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
              }}>
                {mode === 'carte' ? 'Carte des Brasseries' : 'Liste des Brasseries'}
              </h1>

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
              <CarteBrasseries 
                brasseries={brasseriesFiltrees} 
                selectedBrasserie={selectedBrasserie}
                onMarkerClick={handleBrasserieSelect}
              />
            ) : (
              <ListeBrasseries 
                brasseries={brasseriesFiltrees} 
                onSelection={handleBrasserieSelect}
              />
            )}
          </>
        )}
      </main>

      <PiedDePage />
    </div>
  );
};

export default PageAccueil;