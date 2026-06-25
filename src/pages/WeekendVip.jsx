import { useEffect } from 'react';

const WeekendVip = () => {
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
        <main style={{ backgroundColor: '#ffffff' }}>
            {/* Hero Section */}
            <header className="page-header" style={{ height: '75vh', backgroundImage: `linear-gradient(rgba(5, 16, 36, 0.8), rgba(5, 16, 36, 0.8)), url('https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop')`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container" style={{ position: 'relative', zIndex: '2', textAlign: 'center', paddingTop: '80px', paddingBottom: '10vh' }}>
                    <div className="zoom-in">
                        <span className="gold-text" style={{ fontWeight: '700', letterSpacing: '5px', fontSize: '0.9rem', textTransform: 'uppercase' }}>MASTER CLASS D'EXCEPTION</span>
                        <h1 className="page-title" style={{ marginTop: '1.5rem' }}>WEEKEND ACADEMY VIP</h1>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', marginTop: '1.5rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                            Accompagnement, Certification et Professionalisation des chefs d'entreprises bâtisseurs.
                        </p>
                    </div>
                </div>
            </header>

            {/* Form Section */}
            <section className="premium-form-section" style={{ position: 'relative', zIndex: 10, paddingBottom: '5rem' }}>
                <div className="container">
                    <div className="premium-form-box fade-up" style={{ background: 'white', borderRadius: '8px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', borderTop: '4px solid var(--secondary-color)', maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', fontFamily: "'Playfair Display', serif", fontWeight: '700', marginBottom: '0.5rem' }}>Postuler à une Bourse</h2>
                            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>Candidature pour Master Class de Certification &amp; Professionalisation.</p>
                        </div>
                        <form id="booking-form" className="grid-form" style={{ gap: '2rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)', fontSize: '0.9rem' }}>Nom complet</label>
                                <input type="text" style={{ width: '100%', padding: '1.2rem', border: '1px solid #e5e5e5', borderRadius: '4px', background: '#fcfcfc' }} required />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)', fontSize: '0.9rem' }}>WhatsApp</label>
                                <input type="tel" style={{ width: '100%', padding: '1.2rem', border: '1px solid #e5e5e5', borderRadius: '4px', background: '#fcfcfc' }} required />
                            </div>
                            <div style={{ gridColumn: '1 / -1' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-dark)', fontSize: '0.9rem' }}>Motivation ou Projet</label>
                                <textarea style={{ width: '100%', padding: '1.2rem', border: '1px solid #e5e5e5', borderRadius: '4px', height: '120px', resize: 'none', background: '#fcfcfc' }}></textarea>
                            </div>
                            <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '1rem' }}>
                                <button type="submit" className="btn btn-primary" style={{ padding: '1.2rem 4rem', fontSize: '1rem' }}>Valider ma candidature</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Context & Philosophy Section */}
            <section className="section-padding" style={{ background: 'white' }}>
                <div className="container">
                    <div className="about-grid" style={{ alignItems: 'center' }}>
                        <div className="fade-right">
                            <h2 style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '2rem', textAlign: 'left', lineHeight: '1.2', fontFamily: "'Playfair Display', serif", fontWeight: '700' }}>
                                Contexte &amp; <span className="gold-text">ADN</span>
                                <span style={{ display: 'block', width: '60px', height: '3px', background: 'var(--gold-gradient)', marginTop: '1.5rem' }}></span>
                            </h2>
                            <p style={{ color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                                La culture d'entreprise avec <strong>AX-UP3</strong> correspond à un cadre de pensée, un système de valeurs et de règles partagées. Elle est le levier qui permet de construire l'identité de l'entreprise et de réunir les salariés autour de projets communs.
                            </p>
                            <p style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                                Nos valeurs — <strong>Bienveillance, Engagement, Respect</strong> — sont au cœur de la performance opérationnelle. Avec AX-UP3, instaurer cette culture constitue une stratégie de communication redoutable pour la fidélisation de vos clients et partenaires.
                            </p>
                        </div>
                        <div className="fade-left" style={{ background: 'var(--bg-offwhite)', padding: '3.5rem', borderRadius: '8px', borderLeft: '4px solid var(--secondary-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                            <h3 style={{ marginBottom: '2rem', fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: 'var(--primary-color)' }}>Vecteurs de Performance</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center', color: 'var(--text-light)', fontSize: '1.05rem' }}>
                                    <i className="fas fa-check gold-text" style={{ marginRight: '15px', fontSize: '1.2rem' }}></i> Recouvrement de débiteurs
                                </li>
                                <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center', color: 'var(--text-light)', fontSize: '1.05rem' }}>
                                    <i className="fas fa-check gold-text" style={{ marginRight: '15px', fontSize: '1.2rem' }}></i> Dynamisation des souscriptions
                                </li>
                                <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center', color: 'var(--text-light)', fontSize: '1.05rem' }}>
                                    <i className="fas fa-check gold-text" style={{ marginRight: '15px', fontSize: '1.2rem' }}></i> Renouvellements de contrats
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', color: 'var(--text-light)', fontSize: '1.05rem' }}>
                                    <i className="fas fa-check gold-text" style={{ marginRight: '15px', fontSize: '1.2rem' }}></i> Création de culture d'appartenance
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding" style={{ background: '#fdfdfd', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
                <div className="container">
                    <div className="text-center fade-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="section-title">Parcours de Participation</h2>
                        <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-light)', fontSize: '1.1rem' }}>Un processus structuré pour garantir l'excellence de la cohorte.</p>
                    </div>

                    <div className="process-grid" style={{ gap: '2rem', textAlign: 'center' }}>
                        <div className="fade-up">
                            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', color: 'rgba(212, 175, 55, 0.15)', fontWeight: '900', lineHeight: '1', marginBottom: '1rem' }}>01</div>
                            <h3 style={{ fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '1rem', color: 'var(--primary-color)' }}>BOURSE</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>Renseigner le formulaire de candidature pour la Bourse d'Étude.</p>
                        </div>
                        <div className="fade-up delay-1">
                            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', color: 'rgba(212, 175, 55, 0.15)', fontWeight: '900', lineHeight: '1', marginBottom: '1rem' }}>02</div>
                            <h3 style={{ fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '1rem', color: 'var(--primary-color)' }}>RÉSERVATION</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>Dépôt symbolique de 50.000 FCFA via Mobile Money pour confirmer l'inscription.</p>
                        </div>
                        <div className="fade-up delay-2">
                            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', color: 'rgba(212, 175, 55, 0.15)', fontWeight: '900', lineHeight: '1', marginBottom: '1rem' }}>03</div>
                            <h3 style={{ fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '1rem', color: 'var(--primary-color)' }}>PARTICIPATION</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>Contribution finale selon la catégorisation de votre organisation.</p>
                        </div>
                        <div className="fade-up delay-3">
                            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', color: 'rgba(212, 175, 55, 0.15)', fontWeight: '900', lineHeight: '1', marginBottom: '1rem' }}>04</div>
                            <h3 style={{ fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '1rem', color: 'var(--primary-color)' }}>IMMERSION</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>Présentation du cursus à l'ouverture de la session intensive.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Tiers Section */}
            <section className="section-padding pricing-section">
                <div className="container">
                    <div className="advantages-grid pricing-grid">
                        {/* Basic */}
                        <div className="price-card fade-up">
                            <h3 className="gold-text price-card-title">AX-UP3</h3>
                            <div className="price-amount">100.000 <span className="price-currency">FCFA</span></div>
                            <p className="price-description">Accès standard à la certification et aux modules de base.</p>
                            <a href="/contact" className="btn btn-outline price-card-btn">Postuler</a>
                        </div>
                        {/* Premium */}
                        <div className="price-card price-card-featured fade-up delay-1">
                            <span className="price-tag">
                                MAINTENANT DISPONIBLE
                            </span>
                            <h3 className="gold-text price-card-title">PREMIUM-UP3</h3>
                            <div className="price-amount">300.000 <span className="price-currency">FCFA</span></div>
                            <p className="price-description">Accompagnement Élite &amp; Distinction personnalisée.</p>
                            <a href="/contact" className="btn btn-primary price-card-btn">Postuler</a>
                        </div>
                        {/* Medium */}
                        <div className="price-card fade-up delay-2">
                            <h3 className="gold-text price-card-title">MEDIUM-UP3</h3>
                            <div className="price-amount">200.000 <span className="price-currency">FCFA</span></div>
                            <p className="price-description">Parcours complet avec networking stratégique renforcé.</p>
                            <a href="/contact" className="btn btn-outline price-card-btn">Postuler</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hour-by-Hour Friday Schedule */}
            <section className="section-padding" style={{ background: 'var(--primary-color)', color: 'white' }}>
                <div className="container">
                    <h2 className="section-title" style={{ color: 'white', textAlign: 'center', marginBottom: '4rem' }}>Le Programme du Vendredi</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="fade-up timeline-item" style={{ display: 'flex', gap: '3rem', marginBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '3rem' }}>
                            <div style={{ fontWeight: '700', color: 'var(--secondary-color)', fontSize: '1.1rem' }}>09H - 10H30</div>
                            <div>
                                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', fontFamily: "'Playfair Display', serif" }}>LEVEL 1 : Culture &amp; Innovation</h4>
                                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>Accompagnement stratégique sur les fondements du cadre de pensée.</p>
                            </div>
                        </div>
                        <div className="fade-up delay-1 timeline-item" style={{ display: 'flex', gap: '3rem', marginBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '3rem' }}>
                            <div style={{ fontWeight: '700', color: 'var(--secondary-color)', fontSize: '1.1rem' }}>10H30 - 12H</div>
                            <div>
                                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', fontFamily: "'Playfair Display', serif" }}>LEVEL 2 : IA &amp; Com-Digital</h4>
                                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>Accompagnement sur les outils technologiques et l'influence numérique.</p>
                            </div>
                        </div>
                        <div className="fade-up delay-2 timeline-item" style={{ display: 'flex', gap: '3rem', marginBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '3rem' }}>
                            <div style={{ fontWeight: '700', color: 'var(--secondary-color)', fontSize: '1.1rem' }}>12H - 13H</div>
                            <div>
                                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', fontFamily: "'Playfair Display', serif" }}>LEVEL 3 : Déjeuner du Chef</h4>
                                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>Pause gastronomique et débats stratégiques de haut niveau.</p>
                            </div>
                        </div>
                        <div className="fade-up delay-3 timeline-item" style={{ display: 'flex', gap: '3rem', marginBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '3rem' }}>
                            <div style={{ fontWeight: '700', color: 'var(--secondary-color)', fontSize: '1.1rem' }}>14H - 15H</div>
                            <div>
                                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', fontFamily: "'Playfair Display', serif" }}>LEVEL 3 : Négociation Managériale</h4>
                                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>Accompagnement sur les codes de l'art oratoire et de la posture.</p>
                            </div>
                        </div>
                        <div className="fade-up timeline-item" style={{ display: 'flex', gap: '3rem' }}>
                            <div style={{ fontWeight: '700', color: 'var(--secondary-color)', fontSize: '1.1rem' }}>15H - 16H</div>
                            <div>
                                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', fontFamily: "'Playfair Display', serif" }}>Cérémonie de Distinction</h4>
                                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>Remise des certifications et distinctions d'excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ingénierie des Master Class */}
            <section className="section-padding" style={{ background: 'white' }}>
                <div className="container">
                    <div className="text-center fade-up" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 className="section-title">Ingénierie des Master Class</h2>
                        <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-light)', fontSize: '1.1rem' }}>Développez les aptitudes d'un maître de son destin professionnel.</p>
                    </div>

                    <div className="about-grid" style={{ alignItems: 'start' }}>
                        <div className="fade-right" style={{ background: '#fcfcfc', padding: '3rem', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
                            <h3 className="gold-text" style={{ marginBottom: '2rem', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>Aptitudes à Développer</h3>
                            <ul className="module-list" style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                                <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee', color: 'var(--text-dark)', fontWeight: '500' }}>L'Art oratoire &amp; Communication Pro</li>
                                <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee', color: 'var(--text-dark)', fontWeight: '500' }}>Gestion du Stress et Endurance</li>
                                <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee', color: 'var(--text-dark)', fontWeight: '500' }}>Ouverture d'esprit &amp; Adaptabilité</li>
                                <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee', color: 'var(--text-dark)', fontWeight: '500' }}>Anticipation et Exemplarité</li>
                                <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee', color: 'var(--text-dark)', fontWeight: '500' }}>Esprit d'initiative &amp; Motivation interne</li>
                                <li style={{ padding: '1rem 0', color: 'var(--text-dark)', fontWeight: '500', borderBottom: 'none' }}>Empathie et Volontariat</li>
                            </ul>
                        </div>
                        
                        <div className="fade-left responsive-list" style={{ display: 'grid', gap: '2rem' }}>
                            <div className="skill-item-card" style={{ background: 'white', padding: '2.5rem', borderTop: '4px solid var(--secondary-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', borderRadius: '4px' }}>
                                <h4 className="gold-text" style={{ fontSize: '1.2rem', marginBottom: '1rem', fontFamily: "'Playfair Display', serif" }}>Pôle Communication</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)', lineHeight: '1.8', fontSize: '0.95rem' }}>
                                    <li><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--secondary-color)', marginRight: '8px' }}></i> Codes non verbaux</li>
                                    <li><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--secondary-color)', marginRight: '8px' }}></i> Lois de la communication</li>
                                    <li><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--secondary-color)', marginRight: '8px' }}></i> Entretien de recrutement</li>
                                    <li><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--secondary-color)', marginRight: '8px' }}></i> Communication évènementielle</li>
                                </ul>
                            </div>
                            <div className="skill-item-card" style={{ background: 'white', padding: '2.5rem', borderTop: '4px solid var(--secondary-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', borderRadius: '4px' }}>
                                <h4 className="gold-text" style={{ fontSize: '1.2rem', marginBottom: '1rem', fontFamily: "'Playfair Display', serif" }}>Management Projet</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)', lineHeight: '1.8', fontSize: '0.95rem' }}>
                                    <li><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--secondary-color)', marginRight: '8px' }}></i> Gestion de la créativité</li>
                                    <li><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--secondary-color)', marginRight: '8px' }}></i> Projets innovants</li>
                                    <li><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--secondary-color)', marginRight: '8px' }}></i> Conduite de réunions</li>
                                    <li><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: 'var(--secondary-color)', marginRight: '8px' }}></i> Rapports &amp; Comptes-rendus</li>
                                </ul>
                            </div>
                            <div className="skill-item-card" style={{ gridColumn: 'span 2', background: 'white', padding: '2.5rem', borderTop: '4px solid var(--secondary-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', borderRadius: '4px' }}>
                                <h4 className="gold-text" style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: "'Playfair Display', serif" }}>Master Class Accompagnement A.T.E</h4>
                                <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: '1.6' }}>
                                    Évaluation missions, gestion des risques, action terrain encadrée et fidélisation clients.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="zoom-in" style={{ marginTop: '6rem', textAlign: 'center', background: 'var(--primary-color)', color: 'white', padding: '5rem', borderRadius: '12px', boxShadow: '0 20px 40px rgba(5,16,36,0.15)' }}>
                        <i className="fas fa-graduation-cap" style={{ fontSize: '3.5rem', color: 'var(--secondary-color)', marginBottom: '1.5rem' }}></i>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2.5rem', fontFamily: "'Playfair Display', serif" }}>Coaching d'Élite</h2>
                        <blockquote style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', maxWidth: '800px', margin: '0 auto', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)' }}>
                            "Apprenez à apprendre efficacement et devenez maître de votre destin professionnel."
                        </blockquote>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default WeekendVip;
