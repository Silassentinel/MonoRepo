// #region imports
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// #endregion
/**
 *
 * @returns {JSX.Element}
 */
function LinkedInBtn() {
  return (
    <a target="blank" href="https://www.linkedin.com/in/benjamin-degryse">
      <FontAwesomeIcon className="rounded-circle m-1" style={{ width: '1.5rem', height: '1.5rem' }} icon={faLinkedin} />
    </a>
  );
}

export default LinkedInBtn;
