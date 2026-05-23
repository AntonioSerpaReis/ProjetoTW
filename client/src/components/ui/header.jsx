import { navLinks } from '../../data';

export default function Header() {
  return (
    <header className="header" id="header" role="banner">
      <div className="header__container">
        <a href="#" className="header__logo" aria-label="Página inicial do CACA">
          <div className="logo">
            <img src="./assets/logo-caca.svg" alt="Logo CACA" className="header__logo-img" width="60" height="60" />
          </div>
        </a>

        <nav className="header__nav" id="mainNav" role="navigation" aria-label="Navegação principal">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="header__nav-link">{link.label}</a>
          ))}
        </nav>

        <button type="button" className="header__hamburger" id="menuToggle" aria-label="Abrir menu de navegação" aria-expanded="false" aria-controls="mainNav">
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </button>
      </div>
    </header>
  );
}