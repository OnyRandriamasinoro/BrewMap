import React from 'react';

const FicheBrasserie = ({ brasserie }) => {
  return (
    <div
      style={{
        borderRadius: '20px',
        padding: '1.5rem',
        backgroundColor: 'rgba(31, 31, 30, 0.7)',
        color: 'var(--texte-clair)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        transition: 'all 0.3s ease',
        height: '100%', 
        minHeight: '200px', 
        boxSizing: 'border-box',
        ':hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 12px rgba(246, 212, 0, 0.1)'
        }
      }}
    >
      <h3 style={{
        margin: '0',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        fontFamily: 'var(--font-main)',
        color: 'var(--couleur-primaire)',
        minHeight: '3rem',
        display: 'flex',
        alignItems: 'center'
      }}>
        {brasserie.name}
      </h3>

      <div style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem',
          marginBottom: '1rem'
        }}>
          {brasserie.address_1 && (
            <p style={{
              margin: '0',
              fontSize: '0.95rem',
              color: 'var(--texte-clair)',
              fontFamily: 'var(--font-secondary)',
              lineHeight: '1.4'
            }}>
              {brasserie.address_1}
            </p>
          )}

          {brasserie.city && (
            <p style={{
              margin: '0',
              fontSize: '0.95rem',
              color: 'var(--texte-clair)',
              fontFamily: 'var(--font-secondary)',
              lineHeight: '1.4'
            }}>
              {brasserie.city}{brasserie.state && `, ${brasserie.state}`}
            </p>
          )}
        </div>

        {brasserie.website_url && (
          <a
            href={brasserie.website_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              alignSelf: 'flex-start',
              marginTop: 'auto', 
              color: 'var(--accent)',
              fontSize: '0.9rem',
              fontFamily: 'var(--font-main)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease',
              ':hover': {
                textDecoration: 'underline'
              }
            }}
          >
            Visiter le site web
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default FicheBrasserie;