import { useEffect } from 'react';

const Services = () => {
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
            {/* Page Header */}
            <header className="page-header" style={{ height: '50vh', backgroundImage: `linear-gradient(rgba(5, 16, 36, 0.9), rgba(5, 16, 36, 0.9)), url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')`, backgroundAttachment: 'fixed', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="zoom-in gold-text page-title" style={{ marginTop: '50px' }}>Expertises &amp; Pôles de Conseil</h1>
                </div>
            </header>

            {/* Business Recovery */}
            <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="text-center zoom-in" style={{ marginBottom: '5rem', textAlign: 'center' }}>
                        <span className="gold-text" style={{ fontSize: '0.9rem', fontWeight: '700', letterSpacing: '4px', textTransform: 'uppercase' }}>MISSION SPÉCIALE</span>
                        <h2 className="section-title" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>Business Recovery &amp; Redynamisation</h2>
                        <p className="section-subtitle">Accompagnement expert pour les entreprises en difficulté : structuration et sécurisation.</p>
                    </div>

                    <div className="advantages-grid" style={{ marginBottom: '4rem' }}>
                        <div className="advantage-card fade-up">
                            <i className="fas fa-bullseye gold-text" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}></i>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Objectifs du Programme</h3>
                            <ul style={{ color: 'var(--text-light)', paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                                <li style={{ marginBottom: '0.8rem' }}>Structurer et dérisquer le projet entrepreneurial</li>
                                <li style={{ marginBottom: '0.8rem' }}>Stratégie de capture des premiers clients</li>
                                <li style={{ marginBottom: '0.8rem' }}>Préparation à la première levée de fonds</li>
                                <li>Réseautage intensif (START-UP / CIE AGRI)</li>
                            </ul>
                        </div>
                        <div className="advantage-card fade-up delay-1">
                            <i className="fas fa-chart-line gold-text" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}></i>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Expertises Business</h3>
                            <ul style={{ color: 'var(--text-light)', paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                                <li style={{ marginBottom: '0.8rem' }}>Business model &amp; Business-plan</li>
                                <li style={{ marginBottom: '0.8rem' }}>Canaux de distribution &amp; Analyse de marché</li>
                                <li style={{ marginBottom: '0.8rem' }}>Marketing &amp; Force de ventes</li>
                                <li>Gestion de la Propriété Intellectuelle</li>
                            </ul>
                        </div>
                        <div className="advantage-card fade-up delay-2">
                            <i className="fas fa-hand-holding-dollar gold-text" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}></i>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Recherche de Financement</h3>
                            <ul style={{ color: 'var(--text-light)', paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                                <li style={{ marginBottom: '0.8rem' }}>Formation aux pitch investisseurs</li>
                                <li style={{ marginBottom: '0.8rem' }}>Constitution dossiers auprès organismes d'aide à l'État</li>
                                <li style={{ marginBottom: '0.8rem' }}>Accès exclusif aux appels à candidatures RCI Innovation</li>
                                <li>Rencontres avec des Experts Finance</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {/* Accès aux ressources block */}
                        <div className="fade-up" style={{ backgroundColor: '#F9F9FB', padding: '4rem', borderRadius: '12px 12px 0 0', position: 'relative' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Accès aux Ressources</h3>
                            <p style={{ marginBottom: '2rem', color: 'var(--text-dark)' }}>Un écosystème complet pour propulser votre structure :</p>
                            <div className="responsive-list" style={{ display: 'grid', gap: '1.5rem', color: 'var(--text-light)' }}>
                                <div><i className="fas fa-check gold-text" style={{ marginRight: '10px' }}></i> Coaching réalisant</div>
                                <div><i className="fas fa-check gold-text" style={{ marginRight: '10px' }}></i> Mentoring &amp; Mécénat</div>
                                <div><i className="fas fa-check gold-text" style={{ marginRight: '10px' }}></i> Espace de coworking</div>
                                <div><i className="fas fa-check gold-text" style={{ marginRight: '10px' }}></i> Recrutement d'associés</div>
                            </div>
                        </div>
                        {/* Dimension internationale block */}
                        <div className="fade-up" style={{ backgroundColor: 'var(--primary-color)', padding: '4rem', borderRadius: '0 0 12px 12px', color: 'white' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary-color)', marginBottom: '2rem' }}>Dimension Internationale</h3>
                            <ul style={{ listStyle: 'none', lineHeight: '2.5' }}>
                                <li><strong>International Boot camp :</strong> Séjours d'immersion intensive pour une vision globale.</li>
                                <li><strong>Smart Project Booster :</strong> Programme d'accélération exclusif pour projets sélectionnés.</li>
                                <li><strong>Innovation Day :</strong> Journée networking de haut niveau pour le rayonnement continental.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pôles de Coaching Stratégique */}
            <section className="section-padding" style={{ backgroundColor: '#F9F9FB' }}>
                <div className="container">
                    <div className="text-center zoom-in" style={{ marginBottom: '5rem', textAlign: 'center' }}>
                        <h2 className="section-title">Pôles de Coaching Stratégique</h2>
                    </div>
                    <div className="advantages-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div className="advantage-card fade-up" style={{ textAlign: 'left' }}>
                            <i className="fas fa-user-tie gold-text" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}></i>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Management Stratégique</h3>
                            <p style={{ color: 'var(--text-light)' }}>Vision, analyse de positionnement, styles de management et gestion RH.</p>
                        </div>
                        <div className="advantage-card fade-up delay-1" style={{ textAlign: 'left' }}>
                            <i className="fas fa-balance-scale gold-text" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}></i>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Négociation &amp; Marchés</h3>
                            <p style={{ color: 'var(--text-light)' }}>Études de marchés, marketing et politiques de communication promotionnelle.</p>
                        </div>
                        <div className="advantage-card fade-up delay-2" style={{ textAlign: 'left' }}>
                            <i className="fas fa-users gold-text" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}></i>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Efficacité Personnelle</h3>
                            <p style={{ color: 'var(--text-light)' }}>Communication interprofessionnelle, comportement professionnel et gestion de crise.</p>
                        </div>
                        <div className="advantage-card fade-up delay-3" style={{ textAlign: 'left' }}>
                            <i className="fas fa-glass-cheers gold-text" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}></i>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Loisirs &amp; Évènementiel</h3>
                            <p style={{ color: 'var(--text-light)' }}>Team building, dîners de gala, salons et voyages d'affaires linguistiques.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;
