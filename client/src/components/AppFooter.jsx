import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/wantedmindsjp/', icon: './images/fb.png' },
    { name: 'Instagram', url: 'https://www.facebook.com/wantedmindsjp/', icon: './images/instagram.png' },
    { name: 'X', url: 'https://www.facebook.com/wantedmindsjp/', icon: './images/x.png' },
  ];

  return (
    <Container className="footer-container container-lg">
      <footer>
        <div className="upper text-center">
          <div className="address-section">
            <p className="address-label">OUR LOCATION</p>
            <address className="address-details">
              4-12-7 Aoyama-Cyber,<br />
              Minato-ku, Tokyo 107-0062
            </address>
          </div>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="bottom d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="brand">
            <p>&copy; {currentYear} Wanted Minds <span className="d-none d-sm-inline">| All Rights Reserved</span></p>
          </div>
          
          <div className="socials">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={social.icon} alt={`${social.name} Icon`} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </Container>
  );
};

