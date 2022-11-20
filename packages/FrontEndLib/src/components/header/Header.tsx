// #region imports
// #endregion
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// #region Constants
// #endregion
// #region functions

// #endregion
/**
 *
 * @returns {JSX.Element}
 */
function Header() {
  return (
    <Navbar bg="info" expand="lg" className="shadow-sm mb-4 sticky-top">
      <a href="/">
        {' '}
        <img
          // eslint-disable-next-line max-len
          src="https://cdn.domestika.org/ar_1:1,c_fill,dpr_auto,f_auto,h_128,pg_1,t_base_params,w_128/v1545980244/avatars/000/975/627/975627-original.?1545980244"
          className="img-fluid"
          alt="logo"
        />
      </a>
      <Navbar.Brand href="/">Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            to="/about"
            color={false ? 'Black' : 'Green'}
          >
            Home

          </NavLink>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="jobs">Jobs</Nav.Link>
          <Nav.Link href="clients">Clients</Nav.Link>
          <Nav.Link href="blogs">Blogs</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
