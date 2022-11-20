import { render, screen } from '@testing-library/react';
import Blog from '@silassentinel/frontendlib/src/components/blog/BlogComponent';
import BlogType from '@silassentinel/frontendlib/src/types/Blog';

describe('Blog tests', () => {
  // assume
  const blog: BlogType & { Key: string; } = {
    Id: '1',
    Author: 'John Doe',
    Title: 'Test Blog title',
    Text: 'This is a test blog for the text',
    Description: 'This is a test blog for the description',
    Image: 'https://via.placeholder.com/150',
    Tags: ['testTag', 'blogTag'],
    Date: new Date().toString(),
    Key: 'test-blog',
  };
    // act
  render(<Blog
    key={blog.Key}
    Id={blog.Id}
    Author={blog.Author}
    Date={blog.Date}
    Description={blog.Description}
    Image={blog.Image}
    Tags={blog.Tags}
    Title={blog.Title}
    Text={blog.Text}
  />);
  test('is the title loaded correctly', () => {
    const blogTitle = screen.getByText(blog.Title);
    // assert
    expect(blogTitle).toBeInTheDocument();
  });
  test('Is the blog text is loaded correctly', () => {
    const blogText = screen.getByText(blog.Text);
    // assert
    // screen.debug(blogText);
    expect(blogText).toBeInTheDocument();
  });
  test('Is the author name is loaded correctly', () => {
    // assert
    const blogAuthor = screen.getByText(blog.Author);
    expect(blogAuthor).toBeInTheDocument();
  });
  test('Is the date is loaded correctly', () => {
    const blogDate = screen.getByText(blog.Date);
    // assert
    expect(blogDate).toBeInTheDocument();
  });
  test('Are the tags are loaded correctly', () => {
    blog.Tags.forEach((element) => {
      // assert
      const blogTag = screen.getByText(element);
      expect(blogTag).toBeInTheDocument();
    });
  });
  test('Is the description is loaded correctly', () => {
    const blogDescription = screen.getByText(blog.Description);
    // assert
    expect(blogDescription).toBeInTheDocument();
  });
  test('Is the image is loaded correctly', () => {
    const blogImage = screen.getByAltText(blog.Image);
    // assert
    expect(blogImage).toBeInTheDocument();
  });
});
