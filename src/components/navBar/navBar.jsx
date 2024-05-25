import "./navBar.css";
const NavBar = () => {
  const logoImg =
    "https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png";
  return (
    <nav>
      <div>
        <img alt="PokemonLogo" src={logoImg} className="navbar-img" />
      </div>
    </nav>
  );
};
export default NavBar;
