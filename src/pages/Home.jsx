import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    // Trigger counter if applicable
                    const counter = entry.target.querySelector('.counter');
                    if (counter && !counter.classList.contains('counted')) {
                        animateCounter(counter);
                        counter.classList.add('counted');
                    } else if (entry.target.classList.contains('counter') && !entry.target.classList.contains('counted')) {
                        animateCounter(entry.target);
                        entry.target.classList.add('counted');
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.fade-up, .fade-right, .fade-left, .zoom-in');
        animatedElements.forEach(el => {
            observer.observe(el);
        });

        function animateCounter(counter) {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // ms
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };

            updateCounter();
        }

        // FAQ Accordion logic
        const faqItems = document.querySelectorAll('.faq-item');
        const handleFaqClick = (e) => {
            const item = e.currentTarget.parentElement;
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        };

        const questions = document.querySelectorAll('.faq-question');
        questions.forEach(q => q.addEventListener('click', handleFaqClick));

        return () => {
            animatedElements.forEach(el => observer.unobserve(el));
            questions.forEach(q => q.removeEventListener('click', handleFaqClick));
        };
    }, []);

    return (
        <main>
            {/* Hero Section */}
            <section id="accueil" className="hero" style={{ backgroundImage: `linear-gradient(rgba(5, 16, 36, 0.75), rgba(5, 16, 36, 0.75)), url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop')` }}>
                <div className="container hero-content" style={{ paddingTop: '8rem' }}>
                    <span className="gold-text fade-down" style={{ fontWeight: '700', letterSpacing: '5px', textTransform: 'uppercase' }}>L'ADN de la Performance</span>
                    <h1 className="zoom-in" style={{ marginTop: '1.5rem' }}>Réinventer le <span className="gold-text">Leadership</span> Africain</h1>
                    <p className="hero-subtitle fade-right delay-1">AX-UP3 est un levier de performance puissant qui assure la cohésion d'équipe et favorise l'atteinte de vos objectifs stratégiques.</p>
                    <div className="hero-buttons fade-left delay-2">
                        <Link to="/services" className="btn btn-primary">Explorer nos Expertises</Link>
                        <Link to="/weekend-vip" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Rejoindre l'élite</Link>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--bg-offwhite)' }}>
                <div className="container">
                    <div className="text-center zoom-in" style={{ marginBottom: '5rem', textAlign: 'center' }}>
                        <h2 className="section-title">L'Ingénierie de l'Excellence</h2>
                        <p className="section-subtitle">Instaurer une culture d'entreprise forte avec AX-UP3 constitue une stratégie de communication redoutable.</p>
                    </div>
                    <div className="advantages-grid">
                        <div className="service-card fade-right">
                            <div style={{ height: '250px', backgroundImage: `url('${import.meta.env.BASE_URL}images/african_professionals_strategy.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                            <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Négociation &amp; Stratégie</h3>
                                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>Devenez maître de votre destin professionnel à travers des codes de communication d'impact.</p>
                                <Link to="/services" className="gold-text" style={{ fontWeight: '700' }}>Découvrir l'offre →</Link>
                            </div>
                        </div>

                        <div className="service-card zoom-in delay-1">
                            <div style={{ height: '250px', backgroundImage: `url('${import.meta.env.BASE_URL}images/african_professionals_culture.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                            <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>ADN &amp; Culture</h3>
                                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>Un système de valeurs partagées pour harmoniser les compétences à l'échelle mondiale.</p>
                                <Link to="/about" className="gold-text" style={{ fontWeight: '700' }}>Notre philosophie →</Link>
                            </div>
                        </div>

                        <div className="service-card fade-left delay-2">
                            <div style={{ height: '250px', backgroundImage: `url('${import.meta.env.BASE_URL}images/african_professionals_incubation.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                            <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Incubation Élite</h3>
                                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>Une véritable pépinière pour l'innovation, la création et le renforcement des capacités collectives.</p>
                                <Link to="/weekend-vip" className="btn btn-outline" style={{ width: '100%', borderColor: 'var(--secondary-color)', color: 'var(--secondary-color)' }}>S'inscrire au Weekend VIP</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Weekend Academy VIP Promo */}
            <section className="section-padding" style={{ background: 'linear-gradient(135deg, #051024 0%, #0D2040 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                    <div className="about-grid" style={{ alignItems: 'center' }}>
                        <div className="fade-right">
                            <span className="gold-text" style={{ fontWeight: '700', letterSpacing: '5px', textTransform: 'uppercase' }}>PROGRAMME PHARE</span>
                            <h2 style={{ fontSize: '3.5rem', color: 'white', marginTop: '1.5rem', marginBottom: '2rem' }}>Weekend Academy VIP</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: '2', color: 'rgba(255,255,255,0.8)', marginBottom: '3rem' }}>
                                Vivez 02 jours d'immersion totale dédiés à la **Certification &amp; Professionnalisation** des chefs d'entreprise. Une engineering pédagogique unique pour développer votre art oratoire, votre négociation managériale et votre posture de leader d'exception.
                            </p>
                            <ul className="responsive-list" style={{ marginBottom: '4rem', listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                                <li><i className="fas fa-check gold-text" style={{ marginRight: '10px' }}></i> Intelligence Artificielle Pro</li>
                                <li><i className="fas fa-check gold-text" style={{ marginRight: '10px' }}></i> Coaching de Posture</li>
                                <li><i className="fas fa-check gold-text" style={{ marginRight: '10px' }}></i> Négociation Stratégique</li>
                                <li><i className="fas fa-check gold-text" style={{ marginRight: '10px' }}></i> Obligation de Résultat</li>
                            </ul>
                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <Link to="/weekend-vip" className="btn btn-primary" style={{ padding: '1.5rem 3rem' }}>Candidatez à la Bourse</Link>
                                <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>En savoir plus</Link>
                            </div>
                        </div>
                        <div className="fade-left zoom-in" style={{ position: 'relative' }}>
                            <img src={`${import.meta.env.BASE_URL}images/academy-real.png`} style={{ width: '100%', borderRadius: '10px', boxShadow: '0 50px 100px rgba(0,0,0,0.5)' }} alt="Academy VIP Session Réelle" />
                            <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', background: 'var(--secondary-color)', color: 'var(--primary-color)', padding: '2rem', borderRadius: '4px', fontWeight: '900', fontSize: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                                SESSION 2026<br />OUVERTE
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Banner */}
            <section className="quote-banner" style={{ backgroundImage: `linear-gradient(rgba(5, 16, 36, 0.85), rgba(5, 16, 36, 0.85)), url('https://images.unsplash.com/photo-1553028495-1a7c8585930e?q=80&w=2070&auto=format&fit=crop')` }}>
                <div className="container">
                    <div className="zoom-in">
                        <i className="fas fa-quote-left" style={{ fontSize: '4rem', color: 'var(--secondary-color)', marginBottom: '3rem', opacity: '0.5' }}></i>
                        <blockquote style={{ fontFamily: `'Playfair Display', serif`, fontSize: '3rem', lineHeight: '1.2' }}>
                            “Construire et Réinventer le milieu Entrepreneurial et Professionnel autrement.”</blockquote>
                        <p style={{ marginTop: '3rem', fontWeight: '700', letterSpacing: '4px', color: 'var(--secondary-color)', textTransform: 'uppercase' }}>
                            AX-UP3 GROUP VISION</p>
                    </div>
                </div>
            </section>

            {/* Methodology Modernized */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="section-title">Une Méthode de Précision</h2>
                    <div className="stats-grid" style={{ marginTop: '5rem' }}>
                        <div className="process-item fade-up">
                            <div className="process-number">I</div>
                            <h3 style={{ marginTop: '1rem' }}>IMMERSION</h3>
                            <p style={{ color: 'var(--text-light)' }}>Audit analytique de votre psychologie organisationnelle.</p>
                        </div>
                        <div className="process-item fade-up delay-1">
                            <div className="process-number">II</div>
                            <h3 style={{ marginTop: '1rem' }}>CONSTRUCTION</h3>
                            <p style={{ color: 'var(--text-light)' }}>Définition du cadre de pensée et des protocoles d'action.</p>
                        </div>
                        <div className="process-item fade-up delay-2">
                            <div className="process-number">III</div>
                            <h3 style={{ marginTop: '1rem' }}>IMPULSION</h3>
                            <p style={{ color: 'var(--text-light)' }}>Boot Camps intensifs et transmission des codes d'élite.</p>
                        </div>
                        <div className="process-item fade-up delay-3">
                            <div className="process-number">IV</div>
                            <h3 style={{ marginTop: '1rem' }}>CERTIFICATION</h3>
                            <p style={{ color: 'var(--text-light)' }}>Célébration de la montée en gamme et suivi de performance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Counter Section */}
            <section className="section-padding" style={{ background: 'var(--primary-color)', color: 'white' }}>
                <div className="container">
                    <div className="stats-grid" style={{ textAlign: 'center' }}>
                        <div className="stat-item fade-up">
                            <h2 className="gold-text counter" data-target="15" style={{ fontSize: '4rem' }}>0</h2>
                            <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Années d'Expertise</p>
                        </div>
                        <div className="stat-item fade-up delay-1">
                            <h2 className="gold-text counter" data-target="500" style={{ fontSize: '4rem' }}>0</h2>
                            <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Entreprises Coaches</p>
                        </div>
                        <div className="stat-item fade-up delay-2">
                            <h2 className="gold-text counter" data-target="1200" style={{ fontSize: '4rem' }}>0</h2>
                            <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Leaders Certifiés</p>
                        </div>
                        <div className="stat-item fade-up delay-3">
                            <h2 className="gold-text counter" data-target="98" style={{ fontSize: '4rem' }}>0</h2>
                            <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Taux de Satisfaction %</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Partners / Trust Section */}
            <section className="section-padding" style={{ background: 'var(--bg-offwhite)', overflow: 'hidden' }}>
                <div className="container">
                    <h3 style={{ textAlign: 'center', marginBottom: '4rem', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '1rem', color: 'var(--text-light)' }}>
                        Ils nous font confiance</h3>
                    <div className="partners-track" style={{ display: 'flex', gap: '6rem', alignItems: 'center', justifyContent: 'center', opacity: '0.6' }}>
                        <i className="fas fa-university" style={{ fontSize: '3rem' }}></i>
                        <i className="fas fa-building" style={{ fontSize: '3rem' }}></i>
                        <i className="fas fa-microchip" style={{ fontSize: '3rem' }}></i>
                        <i className="fas fa-leaf" style={{ fontSize: '3rem' }}></i>
                        <i className="fas fa-oil-well" style={{ fontSize: '3rem' }}></i>
                        <i className="fas fa-anchor" style={{ fontSize: '3rem' }}></i>
                    </div>
                </div>
            </section>

            {/* FAQ Section Premium */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="section-title">Questions Fréquentes</h2>
                    <div className="faq-container">
                        <div className="faq-item">
                            <div className="faq-question">Qu'est-ce que la Weekend Academy ? <i className="fas fa-chevron-down"></i></div>
                            <div className="faq-answer">Une immersion intensive de 48h axée sur le leadership, la psychologie sociale et la performance opérationnelle haut de gamme.</div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-question">Comment AX-UP3 accompagne-t-il les PME en difficulté ? <i className="fas fa-chevron-down"></i></div>
                            <div className="faq-answer">Via notre programme de Business Recovery qui restructure votre vision, votre marketing et vos accès aux financements publics et privés.</div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-question">Proposez-vous des certifications ? <i className="fas fa-chevron-down"></i></div>
                            <div className="faq-answer">Oui, AX-UP3 délivre des certifications d'excellence reconnues, validant la maîtrise des codes du leadership et de l'innovation.</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
