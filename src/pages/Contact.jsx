import { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.fade-up, .fade-right, .fade-left, .zoom-in');
        animatedElements.forEach(el => {
            observer.observe(el);
        });

        return () => {
            animatedElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <main>
            <header className="page-header" style={{ height: '60vh', backgroundImage: `linear-gradient(rgba(5, 16, 36, 0.8), rgba(5, 16, 36, 0.8)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')` }}>
                <h1 className="zoom-in gold-text page-title">Entrez dans l'Excellence</h1>
            </header>

            <section className="section-padding" style={{ background: 'var(--bg-offwhite)', paddingTop: '0' }}>
                <div className="container" style={{ maxWidth: '1400px' }}>
                    <div className="contact-page-wrapper fade-up">
                        <div className="contact-brief">
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontFamily: "'Playfair Display', serif" }}>Nos Bureaux</h2>
                            <div className="contact-item-premium">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h4 className="gold-text">Siège Social - Abidjan</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>Riviera Palmeraie, Espace Tchansi<br />Derrière immeuble CGK</p>
                                </div>
                            </div>
                            <div className="contact-item-premium">
                                <i className="fab fa-whatsapp"></i>
                                <div>
                                    <h4 className="gold-text">WhatsApp Direct</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>+225 07 01 87 15 61</p>
                                </div>
                            </div>
                            <div className="contact-item-premium">
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <h4 className="gold-text">Email</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>contact@ax-up3-group.ci</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-container">
                            <h3 style={{ fontSize: '2rem', marginBottom: '3rem', color: 'var(--primary-color)' }}>Proposez votre projet</h3>
                            <form id="contact-form">
                                <input type="text" className="premium-input" placeholder="Votre Nom &amp; Prénom" required />
                                <input type="email" className="premium-input" placeholder="Email Professionnel" required />
                                <input type="text" className="premium-input" placeholder="Structure / Entreprise" />
                                <textarea className="premium-input" placeholder="Votre demande ou projet..." style={{ minHeight: '150px', resize: 'none' }} required></textarea>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', marginTop: '1rem', border: 'none' }}>Envoyer la demande</button>
                            </form>
                        </div>
                    </div>

                    <div className="zoom-in" style={{ marginTop: '8rem', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.05)', height: '500px' }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15891.026402808447!2d-3.959929!3d5.35626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjEnMjIuNSJOIDPCsDU3JzM1LjciVw!5e0!3m2!1sfr!2sci!4v1680000000000!5m2!1sfr!2sci" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
