import { useEffect } from 'react';

const About = () => {
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
            {/* Page Header Premium */}
            <header className="page-header" style={{ height: '60vh', backgroundImage: `linear-gradient(rgba(5, 16, 36, 0.8), rgba(5, 16, 36, 0.8)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')`, backgroundAttachment: 'fixed', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="zoom-in gold-text page-title" style={{ marginTop: '50px' }}>L'Ingénierie de la Réussite</h1>
                </div>
            </header>

            {/* Context & ADN Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="about-grid" style={{ alignItems: 'center' }}>
                        <div className="fade-right">
                            <h2 className="section-title" style={{ textAlign: 'left' }}>Contexte &amp; Présentation</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '2rem' }}>
                                La culture d'entreprise avec **AX-UP3** correspond à un cadre de pensée, à un système de
                                valeurs et de règles relativement organisées qui sont partagées par l'ensemble des acteurs
                                de l'entreprise.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
                                Elle englobe les **valeurs, croyances, postulats, attitudes et normes communes**. AX-UP3 est
                                un levier de performance puissant qui assure la cohésion d'équipe et favorise l'atteinte des
                                objectifs stratégiques mondiaux.
                            </p>
                        </div>
                        <div className="fade-left" style={{ position: 'relative' }}>
                            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=1974&amp;auto=format&amp;fit=crop" style={{ width: '100%', borderRadius: '20px', filter: 'grayscale(10%)', boxShadow: '20px 20px 0 var(--secondary-color)' }} alt="African Leadership" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Psychology & Work Culture */}
            <section className="section-padding" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
                <div className="container">
                    <div className="text-center zoom-in" style={{ marginBottom: '5rem', textAlign: 'center' }}>
                        <h2 className="section-title gold-text" style={{ color: 'white', borderBottomColor: 'white' }}>Psychologie Sociale &amp; Travail</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>Garantir une culture d'entreprise dynamique, compétitive et pérenne.</p>
                    </div>

                    <div className="about-grid">
                        <div className="fade-right">
                            <h3 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Piliers d'Intervention</h3>
                            <div style={{ display: 'grid', gap: '2rem' }}>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderLeft: '3px solid var(--secondary-color)' }}>
                                    <h4 style={{ marginBottom: '1rem' }}>Relation Intergroupe</h4>
                                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>Analyse des interactions et harmonisation des forces collectives au sein de l'organisation.</p>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderLeft: '3px solid var(--secondary-color)' }}>
                                    <h4 style={{ marginBottom: '1rem' }}>Perception Sociale</h4>
                                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>Formation des impressions, lutte contre les stéréotypes et gestion de la responsabilité collective.</p>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderLeft: '3px solid var(--secondary-color)' }}>
                                    <h4 style={{ marginBottom: '1rem' }}>Commandement &amp; Leadership</h4>
                                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>Développement de la maturité psychologique des employés et restauration de l'estime personnelle.</p>
                                </div>
                            </div>
                        </div>
                        <div className="fade-left">
                            <h3 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Indicateurs de Coaching</h3>
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{ marginBottom: '1.5rem' }}><i className="fas fa-check-circle gold-text" style={{ marginRight: '1rem' }}></i> <strong>Déclic Personnel</strong> : Capacité à relativiser et à positiver.</li>
                                <li style={{ marginBottom: '1.5rem' }}><i className="fas fa-check-circle gold-text" style={{ marginRight: '1rem' }}></i> <strong>Mobilité &amp; Adaptation</strong> : Capacité à sortir de son environnement.</li>
                                <li style={{ marginBottom: '1.5rem' }}><i className="fas fa-check-circle gold-text" style={{ marginRight: '1rem' }}></i> <strong>Responsabilisation</strong> : Respect des contrats et esprit d'initiative.</li>
                                <li style={{ marginBottom: '1.5rem' }}><i className="fas fa-check-circle gold-text" style={{ marginRight: '1rem' }}></i> <strong>Lien au Travail</strong> : Mission avec obligation de résultat et rigueur hiérarchique.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission & Values */}
            <section className="section-padding">
                <div className="container">
                    <div className="advantages-grid">
                        <div className="about-card feature-card fade-up">
                            <i className="fas fa-crown" style={{ fontSize: '3rem', color: 'var(--secondary-color)', marginBottom: '2rem' }}></i>
                            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Distinction</h3>
                            <p>Nous travaillons à la distinction des meilleurs clients et entreprises partenaires pour booster leur rayonnement.</p>
                        </div>
                        <div className="about-card feature-card fade-up delay-1">
                            <i className="fas fa-users-viewfinder" style={{ fontSize: '3rem', color: 'var(--secondary-color)', marginBottom: '2rem' }}></i>
                            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Recouvrement &amp; Fidélisation</h3>
                            <p>Dynamiser les niveaux de souscriptions et assurer une fidélisation client durable par l'excellence.</p>
                        </div>
                        <div className="about-card feature-card fade-up delay-2">
                            <i className="fas fa-shuffle" style={{ fontSize: '3rem', color: 'var(--secondary-color)', marginBottom: '2rem' }}></i>
                            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Mise en Réseau B-to-B</h3>
                            <p>Favoriser les échanges entre clients locaux et internationaux pour une croissance globale partagée.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Professional Gallery */}
            <section className="section-padding" style={{ background: 'var(--bg-offwhite)' }}>
                <div className="container">
                    <h2 className="section-title">L'Élite en Action</h2>
                    <div className="stats-grid" style={{ marginTop: '4rem', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                        <img src={`${import.meta.env.BASE_URL}images/elite_action_1.png`} style={{ height: '400px', objectFit: 'cover', borderRadius: '8px', width: '100%' }} className="zoom-in" alt="African Leadership Strategy" />
                        <img src={`${import.meta.env.BASE_URL}images/elite_action_2.png`} style={{ height: '400px', objectFit: 'cover', borderRadius: '8px', width: '100%' }} className="zoom-in delay-1" alt="Business African Women" />
                        <img src={`${import.meta.env.BASE_URL}images/elite_action_3.png`} style={{ height: '400px', objectFit: 'cover', borderRadius: '8px', width: '100%' }} className="zoom-in delay-2" alt="African Professional Negotiation" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
