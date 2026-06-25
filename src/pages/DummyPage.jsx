const DummyPage = ({ title }) => {
    return (
        <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
            <h1 className="section-title">{title}</h1>
            <p className="section-subtitle">Cette page est en cours de construction. Elle sera bientôt disponible avec la connexion à la base de données.</p>
        </div>
    );
};

export default DummyPage;
