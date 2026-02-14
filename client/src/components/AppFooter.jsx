import { Container } from 'react-bootstrap';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/wantedmindsjp/', icon: './images/fb.png' },
    { name: 'Instagram', url: 'https://www.facebook.com/wantedmindsjp/', icon: './images/instagram.png' },
    { name: 'X', url: 'https://www.facebook.com/wantedmindsjp/', icon: './images/x.png' },
  ];

  return (
    <Container fluid className="container-lg">
        <footer>
        <div className="upper">
            
            <div className="address">
            <p id="line1">4-12-7 Aoyama-Cyber,</p>
            <p id="line2">Minato-ku, Tokyo 107-0062</p>
            </div>
        </div>
        
        <hr />
        
        <div className="bottom">
            <p>&copy; {currentYear} Wanted Minds | All Rights Reserved</p>
            <div className="socials">
            {socialLinks.map((social, index) => (
                <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
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

