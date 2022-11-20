// #region Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// #endregion
/**
 *
 * @returns {JSX.Element}
 */
function TwitterBtn() {
  return (
    <a href="https://www.twitter.com" target="blank">
      {' '}
      <FontAwesomeIcon className="rounded-circle m-1" style={{ width: '1.5rem', height: '1.5rem' }} icon={faTwitter} />
    </a>
  );
}

export default TwitterBtn;
