import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    useEffect(() => {
        // Simple animation trigger
        const element = document.querySelector('.fade-up');
        if (element) {
            setTimeout(() => {
                element.classList.add('visible');
            }, 100);
        }
    }, []);

    return (
        <main>
            <section className="section-padding" style={{ 
                minHeight: '80vh', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                backgroundImage: `linear-gradient(rgba(5, 16, 36, 0.9), rgba(5, 16, 36, 0.95)), url('https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2070&auto=format&fit=crop')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <div className="fade-up" style={{ 
                        background: 'rgba(255, 255, 255, 0.03)', 
                        padding: '4rem 2rem', 
                        borderRadius: '16px', 
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(212, 175, 55, 0.2)',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
                    }}>
                        <div style={{ marginBottom: '2rem' }}>
                            <i className="fas fa-check-circle gold-text" style={{ fontSize: '5rem', marginBottom: '1.5rem' }}></i>
                            <h1 className="page-title gold-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Félicitations !</h1>
                            <p style={{ color: 'white', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                                Votre paiement a été validé avec succès. Votre place au sein de l'Académie VIP est désormais réservée.
                            </p>
                            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '3rem' }}>
                                Pour finaliser votre intégration et recevoir vos premiers accès, veuillez nous contacter immédiatement via WhatsApp en cliquant sur le bouton ci-dessous.
                            </p>
                        </div>
                        
                        <a href="https://wa.me/2250701871561" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', padding: '1.2rem 3rem', background: '#25D366', color: 'white', border: 'none', boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)' }}>
                            <i className="fab fa-whatsapp" style={{ fontSize: '1.5rem' }}></i>
                            Finaliser sur WhatsApp
                        </a>
                        
                        <div style={{ marginTop: '3rem' }}>
                            <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '2px' }}>
                                Retourner à l'accueil
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ThankYou;
