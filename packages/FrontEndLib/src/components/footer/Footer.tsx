// #region imports
import { Navbar } from 'react-bootstrap';
import LeftFooter from './LeftFooter';
// #endregion
// #region Constants
// #endregion
/**
 *
 * @returns
 */
function Footer() {
  return (
    <Navbar expand="lg" className="sticky-bottom-100 bg-info me-auto mt-1 justify-content-between">
      <LeftFooter />
      <span>
        Created By
        <a
          target="blank"
          href="https://github.com/Silassentinel/"
          className="text-danger"
        >
          Benjamin Degryse
        </a>
      </span>
    </Navbar>
  );
}

export default Footer;
