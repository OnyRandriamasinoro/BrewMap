import React, { useState } from 'react';
import FicheBrasserie from '../composants/FicheBrasserie';

const ListeBrasseries = ({ brasseries, onSelection }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  if (brasseries.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        color: 'rgba(253, 253, 253, 0.7)',
        fontFamily: 'var(--font-secondary)',
        fontSize: '1.1rem'
      }}>
        Aucune brasserie trouvée. Essayez d'élargir votre recherche.
      </div>
    );
  }

  // Calcul des brasseries à afficher
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBrasseries = brasseries.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(brasseries.length / itemsPerPage);

  // Génération des numéros de page à afficher
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, currentPage + 2);
      
      if (startPage > 1) pages.push(1);
      if (startPage > 2) pages.push('...');
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      if (endPage < totalPages - 1) pages.push('...');
      if (endPage < totalPages) pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem',
        padding: '0.5rem'
      }}>
        {currentBrasseries.map((b) => (
          <div 
            onClick={() => onSelection(b)} 
            key={b.id}
            style={{
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              ':hover': {
                transform: 'scale(1.02)'
              }
            }}
          >
            <FicheBrasserie brasserie={b} />
          </div>
        ))}
      </div>

      {brasseries.length > itemsPerPage && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontFamily: 'var(--font-secondary)',
          }}>
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              style={{
                fontFamily: 'var(--font-secondary)',
                background: 'transparent',
                border: '1px solid rgba(246, 212, 0, 0.3)',
                color: 'var(--couleur-primaire)',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease',
                ':disabled': {
                  opacity: 0.5,
                  cursor: 'not-allowed'
                },
                ':hover:not(:disabled)': {
                  borderColor: 'var(--couleur-primaire)',
                  backgroundColor: 'rgba(246, 212, 0, 0.1)'
                }
              }}
            >
              〈 Précédent
            </button>

            <div style={{
              display: 'flex',
              gap: '0.5rem'
            }}>
              {getPageNumbers().map((page, index) => (
                <button
                  key={index}
                  onClick={() => typeof page === 'number' && setCurrentPage(page)}
                  style={{
                    background: page === currentPage ? 'var(--couleur-primaire)' : 'transparent',
                    color: page === currentPage ? 'var(--texte-fonce)' : 'var(--texte-clair)',
                    border: '1px solid rgba(246, 212, 0, 0.3)',
                    borderRadius: '6px',
                    width: '36px',
                    height: '36px',
                    cursor: typeof page === 'number' ? 'pointer' : 'default',
                    fontWeight: 'bold',
                    transition: 'all 0.2s ease',
                    ':hover': typeof page === 'number' && page !== currentPage ? {
                      borderColor: 'var(--couleur-primaire)',
                      backgroundColor: 'rgba(246, 212, 0, 0.1)'
                    } : {}
                  }}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              style={{
                fontFamily: 'var(--font-secondary)',
                background: 'transparent',
                border: '1px solid rgba(246, 212, 0, 0.3)',
                color: 'var(--couleur-primaire)',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease',
                ':disabled': {
                  opacity: 0.5,
                  cursor: 'not-allowed'
                },
                ':hover:not(:disabled)': {
                  borderColor: 'var(--couleur-primaire)',
                  backgroundColor: 'rgba(246, 212, 0, 0.1)'
                }
              }}
            >
              Suivant 〉
            </button>
          </div>
        </div>
      )}

      {/* Affichage des résultats */}
      <div style={{
        textAlign: 'center',
        fontSize: '0.85rem',
        color: 'rgba(253, 253, 253, 0.7)',
        fontFamily: 'var(--font-secondary)'
      }}>
        Affichage des brasseries {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, brasseries.length)} sur {brasseries.length}
      </div>
    </div>
  );
};

export default ListeBrasseries;