import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.3rem', marginBottom: '2.5rem' }}>
                            <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Logo AX-UP3" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
                            <div className="logo-text">AX-UP3<span>.</span> <span style={{ fontSize: '0.8rem', fontWeight: '500', letterSpacing: '2px' }}>GROUP</span></div>
                        </a>
                        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>Nous construisons l'excellence africaine
                            par l'ingénierie de la culture d'entreprise et le coaching de haute posture.</p>
                    </div>
                    <div className="footer-col">
                        <h3>Navigation</h3>
                        <ul>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/about">Notre ADN</Link></li>
                            <li><Link to="/services">Expertises</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Contact &amp; Siège</h3>
                        <div className="contact-item"><i className="fab fa-whatsapp"></i> <span>+225 07 01 87 15 61</span></div>
                        <div className="contact-item"><i className="fas fa-envelope"></i> <span>contact@ax-up3-group.ci</span></div>
                        <div className="contact-item"><i className="fas fa-map-marker-alt"></i> <span>Riviera Palmeraie, Espace
                                Tchansi</span></div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 AX-UP3 GROUP. Tous droits réservés. <br />by TECHLEARN SARL</p>
                </div>
            </div>
            {/* WhatsApp Floating Button */}
            <a href="https://wa.me/2250701871561" className="whatsapp-float" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp"></i>
            </a>
        </footer>
    );
};

export default Footer;
