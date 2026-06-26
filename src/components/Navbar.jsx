import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.3rem' }}>
                    <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Logo AX-UP3" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
                    <div className="logo-text">AX-UP3<span>.</span> <span style={{ fontSize: '0.8rem', fontWeight: '500', letterSpacing: '2px' }}>GROUP</span></div>
                </Link>
                <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
                    <li><Link to="/" className={`nav-item ${currentPath === '/' ? 'active' : ''}`} onClick={closeMenu}>Accueil</Link></li>
                    <li><Link to="/about" className={`nav-item ${currentPath === '/about' ? 'active' : ''}`} onClick={closeMenu}>L'ADN</Link></li>
                    <li><Link to="/services" className={`nav-item ${currentPath === '/services' ? 'active' : ''}`} onClick={closeMenu}>Services</Link></li>
                    <li><Link to="/weekend-vip" className={`highlight-link nav-item ${currentPath === '/weekend-vip' ? 'active' : ''}`} onClick={closeMenu}>Academy VIP</Link></li>
                    <li><Link to="/evenements" className={`nav-item ${currentPath === '/evenements' ? 'active' : ''}`} onClick={closeMenu}>Événements</Link></li>
                    <li><Link to="/contact" className={`nav-item ${currentPath === '/contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</Link></li>
                </ul>
                <div className="hamburger" onClick={toggleMenu}>
                    <i className={menuActive ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
