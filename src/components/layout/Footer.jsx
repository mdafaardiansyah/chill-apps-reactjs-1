import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [genreExpanded, setGenreExpanded] = useState(false);
  const [helpExpanded, setHelpExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className="site-footer" style={{
      backgroundColor: '#181A1C',
      borderTop: '2px solid #444',
      color: 'white',
      padding: '40px 0',
      marginTop: '60px'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: isMobile ? '15px' : '30px',
        flexDirection: isMobile ? 'column' : 'row'
      }}>
        <div className="footer-brand" style={{ marginBottom: '20px' }}>
          <Link to="/home" className="footer-logo" style={{ display: 'block', marginBottom: '15px' }}>
            <img src="/src/assets/images/logo/Logo.png" alt="Chill Logo" style={{ height: '40px' }} />
          </Link>
          <p style={{ fontSize: '14px', color: '#9E9E9E', marginTop: '10px' }}>©2023 Chill All Rights Reserved.</p>
        </div>

        <div className="footer-links" style={{ display: 'flex', gap: isMobile ? '20px' : '60px', flexWrap: 'wrap', flexDirection: isMobile ? 'column' : 'row' }}>
          <div className="footer-section">
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              cursor: isMobile ? 'pointer' : 'default',
              marginBottom: '20px'
            }} onClick={isMobile ? () => setGenreExpanded(!genreExpanded) : undefined}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>Genre</h3>
              {isMobile && (
                <img 
                  src="/src/assets/images/icons/arrow-right.png" 
                  alt="Toggle" 
                  style={{ 
                    width: '16px', 
                    height: '16px', 
                    transform: genreExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }} 
                />
              )}
            </div>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              display: isMobile ? (genreExpanded ? 'grid' : 'none') : 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: '10px 20px',
              width: '500px',
              maxWidth: '100%'
            }}>
              <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>Aksi</Link></li>
              <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>Drama</Link></li>
              <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>Komedi</Link></li>
              <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>Sains & Alam</Link></li>
              <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>Anak-anak</Link></li>
              <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>Fantasi Ilmiah</Link></li>
              <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>Fantasi</Link></li>
              <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>Petualangan</Link></li>
              <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>Thriller</Link></li>
              <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>Anime</Link></li>
              <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>Kejahatan</Link></li>
              <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>Perang</Link></li>
              <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>Britania</Link></li>
              <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>KDrama</Link></li>
              <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>Romantis</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              cursor: isMobile ? 'pointer' : 'default',
              marginBottom: '20px'
            }} onClick={isMobile ? () => setHelpExpanded(!helpExpanded) : undefined}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>Bantuan</h3>
              {isMobile && (
                <img 
                  src="/src/assets/images/icons/arrow-right.png" 
                  alt="Toggle" 
                  style={{ 
                    width: '16px', 
                    height: '16px', 
                    transform: helpExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }} 
                />
              )}
            </div>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              display: isMobile ? (helpExpanded ? 'block' : 'none') : 'block'
            }}>
              <li style={{ marginBottom: '10px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>FAQ</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>Kontak Kami</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>Privasi</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="#" style={{ color: '#9E9E9E', textDecoration: 'none', fontSize: '14px' }}>Syarat & Ketentuan</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;