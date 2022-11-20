// #region imports
import { CardGroup, Container } from 'react-bootstrap';
import JobType from '../types/Job';
import JobComponent from '../components/job/JobComponent';
// eslint-disable-next-line import/extensions
import JobData from '../data/Jobs.json';
// #endregion

/**/

const { jobs } = JobData;
/**
 * The jobs page
 * @returns {JSX.Element}
 */
function Jobs() {
  return (
    <Container>
      {
        jobs
        && (
        <CardGroup key="sdafcqawf" className="bg-danger justify-content-center">
          {
              jobs.map((job: JobType, index:number) => (
                <JobComponent
                  key={`${index.toString() + job.Id}abc`}
                  Id={job.Id}
                  Title={job.Title}
                  Description={job.Description}
                  Summary={job.Summary}
                  Image={job.Image}
                  Requirements={job.Requirements}
                />
              ))
            }
        </CardGroup>
        )
      }
    </Container>
  );
}

export default Jobs;
