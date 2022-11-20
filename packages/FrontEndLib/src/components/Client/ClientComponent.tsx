// #region imports
import { Carousel } from 'react-bootstrap';
import clientType from '../../types/Client';
// #endregion

/*
            <Carousel.Item>
                <img src={ dataClient.Img } alt={ dataClient.Name } className="d-block h-25 w-25 " />
                <Carousel.Caption>
                    <h3>{ dataClient.Name }</h3>
                    <p>{ dataClient.Description }</p>
                    {
                        dataClient.Skills &&
                        dataClient.Skills.map((skill: string, index: number) =>
                        {
                            return (<span key={ index.toString() + skill }>{ skill }</span>);
                        })
                    }
                    <div className="text-muted">
                        <p >{ dataClient.Location }</p>
                        {
                            dataClient.Tools &&
                            dataClient.Tools.map((tool, index) =>
                            {
                                return <span key={ index }>
                                    { tool }
                                </span>;
                            })
                        }
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
 */
/**
 *
 * @param dataClient
 * @returns {JSX.Element}
 */
function ClientComponent(dataClient: clientType) {
  const { Img, Name, Description } = dataClient;
  return (
    <div>
      {
        dataClient
                && (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Img}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{ Name }</h3>
                    <p>{ Description }</p>
                  </Carousel.Caption>
                </Carousel.Item>
                )
            }
    </div>

  );
}

export default ClientComponent;
