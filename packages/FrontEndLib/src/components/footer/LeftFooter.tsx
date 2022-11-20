// #region imports
import { Container } from 'react-bootstrap';
import CookiesBtn from '../btns/CookiesBtn';
import Copyright from '../Copyright/Copyright';
import TwitterBtn from '../btns/TwitterBtn';
import LinkedInBtn from '../btns/LinkedInBtn';
import PrivacyBtn from '../btns/PrivacyBtn';
// #endregion
/**
 *
 * @returns {JSX.Element}
 */
function LeftFooter() {
  return (
    <Container className="justify-content-start">
      <Copyright />
      <LinkedInBtn />
      <TwitterBtn />
      <PrivacyBtn />
      <CookiesBtn />
    </Container>
  );
}

export default LeftFooter;
