// #region imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
// #endregion
/**
 *
 * @returns {JSX.Element}
 */
function PrivacyBtn() {
  return (
    <a href="/Privacy">
      <FontAwesomeIcon icon={faKey} className="rounded-circle m-1" style={{ width: '1.5rem', height: '1.5rem' }} />
    </a>
  );
}

export default PrivacyBtn;
