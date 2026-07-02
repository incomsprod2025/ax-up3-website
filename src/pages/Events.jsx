import React, { useState, useEffect } from 'react';

const galleryImages = [
    'img1.png',
    'img2.jpeg',
    'img3.jpeg',
    'img4.jpeg',
    'img5.jpeg',
    'img6.jpeg',
    'img7.jpeg',
    'img8.jpeg',
    'img9.jpeg',
    'img10.jpeg',
    'img11.jpeg',
    'img12.jpeg',
    'img13.jpeg',
    'img14.jpeg',
    'img16.jpeg'
];

const Events = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

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
        animatedElements.forEach(el => observer.observe(el));

        return () => {
            animatedElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    const openLightbox = (index) => {
        setSelectedImageIndex(index);
        document.body.style.overflow = 'hidden'; 
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <main style={{ backgroundColor: 'var(--bg-offwhite)', minHeight: '100vh', paddingBottom: '0' }}>
            {/* Header Section */}
            <header className="page-header" style={{ height: '40vh', backgroundImage: `linear-gradient(rgba(5, 16, 36, 0.9), rgba(5, 16, 36, 0.9)), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop')`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container" style={{ position: 'relative', zIndex: '2', textAlign: 'center', paddingTop: '80px' }}>
                    <h1 className="zoom-in gold-text page-title" style={{ marginTop: '1.5rem' }}>Rayonnement &amp; Connexions</h1>
                </div>
            </header>

            {/* Featured Event Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--bg-offwhite)' }}>
                <div className="container" style={{ maxWidth: '1100px' }}>
                    <div className="fade-up" style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'white', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
                        <div style={{ flex: '1 1 400px', minHeight: '400px', backgroundImage: `url('${import.meta.env.BASE_URL}images/gala_dinner.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        <div style={{ flex: '1 1 450px', padding: '5rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span className="gold-text" style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '4px', textTransform: 'uppercase' }}>Cérémonie Gala</span>
                            <h2 style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '1.5rem', color: 'var(--primary-color)', lineHeight: '1.2' }}>Distinction des Meilleures Entreprises</h2>
                            <p style={{ color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
                                Un moment solennel dédié à la célébration de l'excellence entrepreneuriale africaine. Nous honorons les structures ayant atteint les plus hauts standards de certification AX-UP3.
                            </p>
                            <div style={{ display: 'flex', gap: '3rem', marginBottom: '3rem', alignItems: 'center' }}>
                                <div>
                                    <div className="gold-text" style={{ fontSize: '1.8rem', fontWeight: '700' }}>500+</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>Leaders Présents</div>
                                </div>
                                <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
                                <div>
                                    <div className="gold-text" style={{ fontSize: '1.8rem', fontWeight: '700' }}>15</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>Distinctions Or</div>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', boxShadow: '0 10px 20px rgba(212, 175, 55, 0.2)' }}>Devenir Partenaire</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Icons Section */}
            <section style={{ backgroundColor: 'var(--bg-offwhite)', paddingBottom: '6rem' }}>
                <div className="container" style={{ maxWidth: '1100px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {/* Card 1 */}
                        <div className="fade-up delay-1" style={{ backgroundColor: '#ffffff', padding: '3.5rem 2.5rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', borderRadius: '4px', borderBottom: '3px solid var(--secondary-color)' }}>
                            <i className="fas fa-users gold-text" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}></i>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Team Building &amp; Ateliers</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: '1.6' }}>Renforcer la cohésion d'équipe par des activités immersives et des ateliers de travail collaboratif.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="fade-up delay-2" style={{ backgroundColor: '#ffffff', padding: '3.5rem 2.5rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', borderRadius: '4px', borderBottom: '3px solid var(--secondary-color)' }}>
                            <i className="fas fa-microphone-alt gold-text" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}></i>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Interviews &amp; Salons</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: '1.6' }}>Visibilité maximale à travers des interviews stratégiques et la participation à des salons de prestige.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="fade-up delay-3" style={{ backgroundColor: '#ffffff', padding: '3.5rem 2.5rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', borderRadius: '4px', borderBottom: '3px solid var(--secondary-color)' }}>
                            <i className="fas fa-plane-departure gold-text" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}></i>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Voyages d'Affaires</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: '1.6' }}>Immersions linguistiques et missions économiques internationales pour élargir vos horizons.</p>
                        </div>
                    </div>
                    
                    <p className="fade-up delay-4" style={{ textAlign: 'center', marginTop: '3.5rem', fontStyle: 'italic', color: 'var(--text-light)', fontSize: '0.95rem' }}>
                        Mais aussi : Afterworks, Dîners de Gala, Publi-reportages et Cérémonies de Distinction.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="container">
                    <div className="text-center zoom-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span className="gold-text" style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '4px', textTransform: 'uppercase' }}>Immersion Réelle</span>
                        <h2 className="section-title" style={{ marginTop: '1rem' }}>AX-UP3 en Action</h2>
                        <p style={{ color: 'var(--text-light)', marginTop: '1.5rem', fontSize: '1.1rem' }}>Aperçu de nos récents forums, conférences et sessions de coaching stratégique.</p>
                    </div>

                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                        gap: '1.5rem' 
                    }}>
                        {galleryImages.map((image, index) => (
                            <div 
                                key={index} 
                                className="fade-up" 
                                style={{ animationDelay: `${(index % 4) * 0.1}s` }}
                                onClick={() => openLightbox(index)}
                            >
                                <div style={{ 
                                    cursor: 'pointer', 
                                    overflow: 'hidden', 
                                    borderRadius: '8px', 
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                    aspectRatio: '1 / 1',
                                    position: 'relative'
                                }}
                                className="gallery-thumbnail"
                                >
                                    <img 
                                        src={`${import.meta.env.BASE_URL}images/galerie/${image}`} 
                                        alt={`Événement ${index + 1}`} 
                                        style={{ 
                                            width: '100%', 
                                            height: '100%', 
                                            objectFit: 'cover',
                                            transition: 'transform 0.4s ease'
                                        }} 
                                        className="hover-zoom"
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        backgroundColor: 'rgba(0,0,0,0.3)',
                                        opacity: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'opacity 0.3s ease',
                                        color: 'white',
                                        fontSize: '2rem'
                                    }} className="gallery-overlay-icon">
                                        <i className="fas fa-search-plus"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox / Overlay */}
            {selectedImageIndex !== null && (
                <div 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(8px)'
                    }}
                    onClick={closeLightbox}
                >
                    <button 
                        onClick={closeLightbox}
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '30px',
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            fontSize: '2rem',
                            cursor: 'pointer',
                            zIndex: 10000
                        }}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                    
                    <button 
                        onClick={prevImage}
                        style={{
                            position: 'absolute',
                            left: '20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255,255,255,0.1)',
                            border: 'none',
                            color: 'white',
                            fontSize: '2rem',
                            cursor: 'pointer',
                            padding: '1rem',
                            borderRadius: '50%',
                            zIndex: 10000,
                            transition: 'background 0.3s ease'
                        }}
                        className="lightbox-nav-btn"
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>

                    <button 
                        onClick={nextImage}
                        style={{
                            position: 'absolute',
                            right: '20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255,255,255,0.1)',
                            border: 'none',
                            color: 'white',
                            fontSize: '2rem',
                            cursor: 'pointer',
                            padding: '1rem',
                            borderRadius: '50%',
                            zIndex: 10000,
                            transition: 'background 0.3s ease'
                        }}
                        className="lightbox-nav-btn"
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>

                    <div style={{ maxWidth: '90%', maxHeight: '85vh' }} onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={`${import.meta.env.BASE_URL}images/galerie/${galleryImages[selectedImageIndex]}`} 
                            alt={`Événement zoom`} 
                            style={{ 
                                maxWidth: '100%', 
                                maxHeight: '85vh', 
                                objectFit: 'contain',
                                borderRadius: '4px',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                            }} 
                        />
                        <div style={{ color: 'white', textAlign: 'center', marginTop: '1rem', fontSize: '1rem', opacity: 0.8 }}>
                            {selectedImageIndex + 1} / {galleryImages.length}
                        </div>
                    </div>
                </div>
            )}
            
            <style>{`
                .hover-zoom:hover {
                    transform: scale(1.1);
                }
                .gallery-thumbnail:hover .gallery-overlay-icon {
                    opacity: 1;
                }
                .lightbox-nav-btn:hover {
                    background: rgba(255,255,255,0.2) !important;
                }
            `}</style>
        </main>
    );
};

export default Events;
