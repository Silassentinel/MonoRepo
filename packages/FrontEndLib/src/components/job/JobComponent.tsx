// #region imports
import { Card, Button } from 'react-bootstrap';
import job from '../../types/Job';
// #endregion
/**
 *
 * @param dataJob
 * @returns {JSX.Element}
 */
function JobComponent(dataJob: job) {
  const {
    Id, Description, Summary, Image, Requirements, Title,
  } = dataJob;
  return (
    <span key={`${Id}a`}>
      <Card className="text-center m-2 bg-info" key={`${Id}b`}>
        { /* Image to accompany the title */ }
        <Card.Img className="h-25 w-25 justify-content-center m-auto p-auto" key={`${Id}c`} variant="top" src={Image} />
        <Card.Header className=" bg-black text-light" key={`${Id}d`}>
          { Title }
        </Card.Header>
        <Card.Body className="bg-primary text-warning" key={`${Id}e`}>
          { /* Description as subtitle */ }
          <Card.Subtitle className="bg-black" key={`${Id}f`}>
            { Description }
          </Card.Subtitle>
          { /* Text to display the blog */ }
          <Card.Text className="bg-white" key={`${Id}g`}>
            { Summary }
          </Card.Text>
        </Card.Body>
        { /* footer contains author date  and tags */ }
        <Card.Footer key={`${Id}h`} className="text-muted bg-success">
          { Requirements }
          <Button>
            Click here to apply
          </Button>
        </Card.Footer>
      </Card>
    </span>
  );
}

export default JobComponent;
