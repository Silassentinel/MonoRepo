// #region imports
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
// #endregion
// #region config
dotenv.config();

// #endregion

class Server {
  // #region props
  // #endregion
  // #region constructor
  // #endregion
  // #region meths
  static Run = () => {
    const app = express();
    const port = process.env.PORT || 3000;
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use(bodyParser.json());
    app.use(helmet());
    app.listen(port, () => console.log(`Listening on port ${port}...`));
  };
  // #region getters & setters
  // #endregion
  // #endregion
}
export default Server;
