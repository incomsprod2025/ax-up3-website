const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <a href="/" className="logo" style={{ display: 'block', marginBottom: '2.5rem' }}>AX-UP3<span>.</span></a>
                        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>Nous construisons l'excellence africaine
                            par l'ingénierie de la culture d'entreprise et le coaching de haute posture.</p>
                    </div>
                    <div className="footer-col">
                        <h3>Navigation</h3>
                        <ul>
                            <li><a href="/">Accueil</a></li>
                            <li><a href="/about">Notre ADN</a></li>
                            <li><a href="/services">Expertises</a></li>
                            <li><a href="/contact">Contact</a></li>
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
