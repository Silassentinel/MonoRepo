// #region imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
// #endregion
/**
 *
 * @returns {JSX.Element}
 */
function CookiesBtn() {
  return (
    <a href="/Cookie">
      <FontAwesomeIcon icon={faCookieBite} style={{ width: '1.5rem', height: '1.5rem' }} />
    </a>
  );
}

export default CookiesBtn;
