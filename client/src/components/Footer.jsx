const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/wantedmindsjp/', icon: `${import.meta.env.BASE_URL}images/fb.webp` },
    { name: 'Instagram', url: 'https://www.facebook.com/wantedmindsjp/', icon: `${import.meta.env.BASE_URL}images/instagram.webp` },
    { name: 'X', url: 'https://www.facebook.com/wantedmindsjp/', icon: `${import.meta.env.BASE_URL}images/x.webp` },
  ];

  return (
    <div className="footer-container container-lg">
      <footer>
               
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
    </div>
  );
};

export default Footer;