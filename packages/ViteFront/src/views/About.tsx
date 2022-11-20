// #region imports
import { Container, Table } from 'react-bootstrap';
// #endregion
// #region Constants
// #endregion
/**
 * This function component will be the about me page
 * This page will be styled with bootstrap
 * @returns {JSX.Element} About page
 */
function About(): JSX.Element {
  return (
    <Container>
      <h2>Whoami  Benjamin Degryse</h2>
      <h2>short intro</h2>
      <p>
        I am 30 years old and I live in Belgium and I am a full stack software developer/Automation engineer and I have
        been intrigued by IT since I was a kid. I learned working with computers from a young age.
        From around the age of 12 I bought myself my first computer and fell down the rabbit hole.
        The next year I started exploring the world of Linux and I have been using it ever since.
        In my spare time during secondary school I have broaded my understanding and knowledge of IT.
      </p>
      <hr />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Soft Skills</th>
            <th> # </th>
            <th> # </th>
            <th> # </th>
            <th> # </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Analytical, optimizing and problem solving are in my nature.</td>
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td>Teamworker as well as alone, the goal is to get the job done</td>
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td>Leading, training and following up a team.</td>
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td>Socially and client oriented.</td>
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td>Very eager to keep learning.</td>
            <td />
            <td />
            <td />
            <td />
          </tr>
        </tbody>
        <hr />
        <thead>
          <tr>
            <th>Hard Skills</th>
            <th> # </th>
            <th> # </th>
            <th> # </th>
            <th> # </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Operating systems: </td>
            <td>Linux: Ubuntu 8.10 - 22.04</td>
            <td> Linux mint 18</td>
            <td> Windows: 98 – 11</td>
            <td />
          </tr>
          <tr>
            <td>ProgrammingLanguages:</td>
            <td>Desktop application development:</td>
            <td>C#, VB.Net, Java, Python</td>
            <td>ASP.net, Entity Framework, Ado.Net, WPF, Forms</td>
            <td />
          </tr>
          <tr>
            <td />
            <td>Web development:</td>
            <td>HTML, CSS, JQuery, Javascript, Typescript</td>
            <td>Bootstrap, React, Express, NodeJs/NPM</td>
            <td />
          </tr>
          <tr>
            <td />
            <td>Mobile application development:</td>
            <td>Javascript, Typescript</td>
            <td>React-Native</td>
            <td />
          </tr>
          <tr>
            <td />
            <td>Database:</td>
            <td>SQL, Mysql, MSSQL</td>
            <td>Google Firebase, Azure</td>
            <td />
          </tr>
          <tr>
            <td />
            <td>DevOps:</td>
            <td>YAML, </td>
            <td>Terraform, Azue-CLI, </td>
            <td />
          </tr>
          <tr>
            <td />
            <td>Other:</td>
            <td>Git, Github, Gitlab, Bitbucket  </td>
            <td>Visual Studio, Visual Studio Code, Android Studio</td>
            <td />
          </tr>
        </tbody>
        <hr />
        <thead>
          <tr>
            <th>Intrest</th>
            <th>Level</th>
            <th> # </th>
            <th> # </th>
            <th> # </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>IT</td>
            <td>10</td>
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td>Cooking</td>
            <td>10</td>
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td>Gardening</td>
            <td>10</td>
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td>Music</td>
            <td>8</td>
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td>Games</td>
            <td>7</td>
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td>Reading</td>
            <td>6</td>
            <td />
            <td />
            <td />
          </tr>
        </tbody>
      </Table>
      {// education a horizontal timeline with bullets that open mini modals / tooltips
      }
      <h3>Education</h3>
      { // Certifications
      }
      <h3>Certifications</h3>
      {// work experience links to jobs
      }
      <h3><a href="/jobs"> Work Experience</a></h3>
    </Container>
  );
}

export default About;
