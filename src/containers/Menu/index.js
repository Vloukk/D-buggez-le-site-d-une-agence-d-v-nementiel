/* eslint-disable no-return-assign */
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

const scrollToContact = () => {
  // Définissez la section "contact" comme destination
  const contactSection = document.getElementById('contact');
  // Assurez-vous que la section existe avant de faire défiler
  if (contactSection) {
    // Faites défiler vers la section "contact"
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Menu = () => (
  <nav>
    <Logo />
    <ul>
      <li>
        <a href="#nos-services">Nos services</a>
      </li>
      <li>
        <a href="#nos-realisations">Nos réalisations</a>
      </li>
      <li>
        <a href="#notre-equipe">Notre équipe</a>
      </li>
    </ul>
    <Button title="contact" onClick={scrollToContact}>
      Contact
    </Button>
  </nav>
  
);

export default Menu;
