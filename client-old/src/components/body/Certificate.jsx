import SectionTitle from "../parts/SectionTitle";
import "../../style/body/Certificate.css"

export default function Certificate() {
  const certificates = [
    {
      id: 1,
      title: "Introduction to Software Engineering",
      issuer: "IBM",
      issuedDate: "May 2024",
      credentialId: "8SHCF28WL2MQ",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/8SHCF28WL2MQ",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      skills: ["Software Engineering", "SDLC", "Development Practices"],
      color: "#0f62fe"
    },
    {
      id: 2,
      title: "HTML, CSS, and Javascript for Web Developers",
      issuer: "The Johns Hopkins University",
      issuedDate: "March 2024",
      credentialId: "R9QCE9DK2FZM",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/R9QCE9DK2FZM", // Add your actual credential URL
      logo: "https://crystalpng.com/wp-content/uploads/2025/01/johns-hopkins-university-logo-in-circle.png",
      skills: ["Web Development", "Frontend Development", "JavaScript"],
      color: "#002d72"
    },
    {
      id: 3,
      title: "Aptis ESOL Level B2",
      issuer: "British Council",
      issuedDate: "2023",
      credentialId: "B2 Level Certification",
      credentialUrl: "https://credentials.britishcouncil.org/3721606a-393a-40bd-bb61-6cf48a988f79?key=31531b16e75a6a28c3949037e0dd3ee9b07a631a0c187899f88a81256ea8d585#acc.LsgP2Efi", 
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e31e24'/%3E%3Ctext x='50' y='35' font-family='Arial, sans-serif' font-size='20' font-weight='bold' text-anchor='middle' fill='white'%3EAPTIS%3C/text%3E%3Ctext x='50' y='65' font-family='Arial, sans-serif' font-size='32' font-weight='bold' text-anchor='middle' fill='white'%3EB2%3C/text%3E%3C/svg%3E",
      skills: ["English Proficiency", "Communication", "CEFR B2 Level"],
      color: "#e31e24"
    }
  ];

  return (
    <div>
      <div className="grid contact-seciton-container">
        <SectionTitle name="Certifications" />
        
        <div className="certificate-container">
          <div className="certificates-grid">
            {certificates.map((cert) => (
              <div key={cert.id} className="certificate-card">
                <div className="certificate-header">
                  <div className="certificate-logo-wrapper">
                    <div 
                      className="certificate-logo-bg"
                      style={{ background: `linear-gradient(135deg, ${cert.color}15 0%, ${cert.color}05 100%)` }}
                    >
                      <img 
                        src={cert.logo} 
                        alt={`${cert.issuer} logo`}
                        className="certificate-logo"
                      />
                    </div>
                  </div>
                  
                  <div className="certificate-badge">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4070f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div className="certificate-content">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-issuer">{cert.issuer}</p>
                  
                  <div className="certificate-meta">
                    <div className="meta-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Issued {cert.issuedDate}</span>
                    </div>
                    <div className="meta-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 14C9.23858 14 7 16.2386 7 19V20H17V19C17 16.2386 14.7614 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  </div>

                  <div className="certificate-skills">
                    {cert.skills.map((skill, index) => (
                      <span key={index} className="skill-tag" style={{ borderColor: cert.color }}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={cert.credentialUrl} 
                    className="credential-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Show credential</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>

                <div className="certificate-decoration" style={{ background: cert.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}