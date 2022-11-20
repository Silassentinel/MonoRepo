// #region imports
import { Container, Row } from 'react-bootstrap';
import BlogType from '../types/Blog';
import BlogComponent from '../components/blog/BlogComponent';
// eslint-disable-next-line import/extensions
import BlogData from '../data/Blogs.json';
// #endregion
// #region functions
// import JsonToBlog from "../scripts/JsonToBlog";
// #endregion

const { blogs } = BlogData;

/**
 * The blog page
 * @returns {JSX.Element}
 */
function Blogs() {
  return (
    <Container>
      {
        blogs
        && (
        <Row key="sdafcqawf" className="bg-danger">
          {
            blogs.map((blog: BlogType, index) => (
              <BlogComponent
                key={`${index.toString() + blog.Id}abc`}
                Id={blog.Id}
                Author={blog.Author}
                Date={blog.Date}
                Title={blog.Title}
                Description={blog.Description}
                Text={blog.Text}
                Image={blog.Image}
                Tags={blog.Tags}
              />
            ))
          }
        </Row>
        )
      }
    </Container>
  );
}

export default Blogs;
