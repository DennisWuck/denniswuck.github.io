
const Experience = () => {
  const experiences = [
    {
      period: "sep '21 – heden",
      company: "InKaart Administraties",
      role: "Eigenaar",
      description: "Verzorgen van administraties, jaarrekeningen en fiscale aangiften voor ZZP'ers en MKB bedrijven."
    },
    {
      period: "mrt '25 – heden",
      company: "VB Support BV",
      role: "Financieel Controller",
      description: "Balansposten controleren, opschonen en specificaties opstellen. Controle OB. Verbeteren van administratieve processen."
    },
    {
      period: "jul '24 – feb '25",
      company: "Marel Red Meat",
      role: "Financieel Controller",
      description: "Orderbeheer, verkooporders, CBS aangiften, account reconciliations, controle goederenbeweging, WKR overzicht en forecast."
    },
    {
      period: "nov '23 – mei '24",
      company: "RockStart",
      role: "Boekhouder",
      description: "Boekhouding, financiële rapportages, maandafsluitingen, betalingen, crediteuren- en debiteurenbeheer, aangiften OB."
    }
  ];

  return (
    <section id="experience" className="section bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-inkaart-primary mb-4">Werkervaring</h2>
          <p className="text-lg text-inkaart-dark">
            Met meer dan 10 jaar ervaring in financiële administratie en boekhouding
            voor diverse bedrijven en branches.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-inkaart-primary pl-6 ml-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-inkaart-accent border-4 border-inkaart-primary"></div>
                <div className="mb-2">
                  <span className="text-sm font-medium text-inkaart-accent">{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold text-inkaart-primary mb-1">{exp.company}</h3>
                <h4 className="text-lg font-medium text-inkaart-secondary mb-3">{exp.role}</h4>
                <p className="text-inkaart-dark">{exp.description}</p>
              </div>
            ))}
            
            <div className="text-center mt-8">
              <a 
                href="#contact" 
                className="inline-block text-inkaart-primary hover:text-inkaart-accent transition-colors underline"
              >
                Bekijk mijn volledige CV in een persoonlijk gesprek
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
