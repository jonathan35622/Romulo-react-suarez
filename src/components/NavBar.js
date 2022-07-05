import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
<nav className="nav nav-pills flex-column flex-sm-row">
  <a className="flex-sm-fill text-sm-center nav-link active Size" aria-current="page" href="#">Remeras</a>
  <a className="flex-sm-fill text-sm-center nav-link active Size" href="#">Camperas</a>
  <a className="flex-sm-fill text-sm-center nav-link active Size" href="#">Buzos</a>
  <CartWidget/>
</nav>)
};

export default NavBar;