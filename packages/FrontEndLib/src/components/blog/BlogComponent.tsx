// #region imports
import { Card } from 'react-bootstrap';
import blog from '../../types/Blog';
// #endregion

/**
 *
 * @param dataBlog
 * @returns {JSX.Element}
 */
function BlogComponent(dataBlog: blog) : JSX.Element {
  const {
    Text, Title, Description, Image, Id, Tags, Author,
  } = dataBlog;
  return (
    <span key={`${Id}a`}>
      { /* React bootstrap cards to display the blogs */ }
      <Card className="text-center m-2 bg-info" key={`${Id}b`}>
        { /* Image to accompany the title */ }
        <Card.Img
          alt={Image}
          className="h-25 w-25 justify-content-center m-auto p-auto"
          key={`${Id}c`}
          variant="top"
          src={Image}
        />
        <Card.Header
          className="bg-black text-light"
          key={`${Id}d`}
        >
          { Title }
        </Card.Header>
        <Card.Body
          className="bg-primary text-warning"
          key={`${Id}e`}
        >
          { /* Description as subtitle */ }
          <Card.Subtitle className="bg-black" key={`${Id}f`}>
            { Description }
          </Card.Subtitle>
          { /* Text to display the blog */ }
          <Card.Text className="bg-white" key={`${Id}g`}>
            { Text }
          </Card.Text>
        </Card.Body>
        { /* footer contains author date  and tags */ }
        <Card.Footer key={`${Id}h`} className="text-muted bg-success">
          <span className="footAuthor">
            {
                            `${Author} `
                        }
          </span>

          <span className="footDate">
            {
                            `${Date} `
                        }
          </span>
          <div className="footTags">
            {
                        Tags
                        && Tags.map((tag, index) => (
                          <span className="text-bg-secondary text-info footTag" key={`${Id + index}i`}>
                            { `${tag} ` }
                          </span>
                        ))
                        }
          </div>
        </Card.Footer>
      </Card>
    </span>
  );
}

export default BlogComponent;
