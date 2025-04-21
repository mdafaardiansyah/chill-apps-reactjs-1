import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const handleLogout = () => {
    // Implementasi logout - dalam aplikasi nyata, Anda akan menghapus token, state user, dll.
    // Untuk contoh sederhana ini, hanya navigasi ke halaman login
    navigate('/');
    setIsDropdownOpen(false);
  };
  
  // Menutup dropdown ketika klik di luar dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo-nav">
          <Link to="/home" className="logo">
            <img src="/src/assets/images/logo/Logo.png" alt="Chill Logo" />
          </Link>
          <nav className="main-nav">
            <ul>
              <li><Link to="#">Series</Link></li>
              <li><Link to="#">Film</Link></li>
              <li><Link to="#">Daftar Saya</Link></li>
            </ul>
          </nav>
        </div>

        <div className="user-profile" ref={dropdownRef}>
          <div onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <img src="/src/assets/images/hero/Avatar.png" alt="Profile" className="avatar" />
            <img 
              src="/src/assets/images/icons/KeyboardArrowDown.png" 
              alt="Dropdown" 
              className={`arrow-down ${isDropdownOpen ? 'rotate' : ''}`}
              style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
            />
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content" style={{
              position: 'absolute',
              top: '60px',
              right: '0',
              backgroundColor: '#1F1D2B',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              zIndex: 100,
              minWidth: '200px',
              animation: 'fadeIn 0.3s ease'
            }}>
              <Link to="#" className="dropdown-item" style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                color: 'white',
                textDecoration: 'none',
                gap: '10px'
              }}>
                <img src="/src/assets/images/icons/account.png" alt="Profile" />
                <span>Profil Saya</span>
              </Link>
              <Link to="#" className="dropdown-item" style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                color: 'white',
                textDecoration: 'none',
                gap: '10px'
              }}>
                <img src="/src/assets/images/icons/star.png" alt="Premium" />
                <span>Ubah Premium</span>
              </Link>
              <button onClick={handleLogout} className="dropdown-item logout-button" style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                color: 'white',
                background: 'none',
                border: 'none',
                width: '100%',
                textAlign: 'left',
                cursor: 'pointer',
                gap: '10px'
              }}>
                <img src="/src/assets/images/icons/logout-variant.png" alt="Logout" />
                <span>Keluar</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;