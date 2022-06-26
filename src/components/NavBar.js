const NavBar = () => {
    return (
<nav className="nav nav-pills flex-column flex-sm-row">
  <a className="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Remeras</a>
  <a className="flex-sm-fill text-sm-center nav-link" href="#">Camperas</a>
  <a className="flex-sm-fill text-sm-center nav-link disabled">Buzos</a>
</nav>)
};

export default NavBar;