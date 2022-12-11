// this file will contain the main server functions.

// #region imports
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieparser from 'cookie-parser';
import csrf from 'csurf';
// import MainRoute from '../routes/MainRoute';
// import FallBackRoute from '../routes/FallBack';
import Login from '../routes/Login';
// #endregion

// #region config
dotenv.config();
const corsOptions = {
  origin: 'localhost:3000',
  optionsSuccessStatus: 200, // For legacy browser support
};
const csrfProtection = csrf({ cookie: true });
// #endregion

const Run = async () => {
  const port: string | number = process.env.PORT || 3000;
  const app = express();
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieparser());
  app.use(csrfProtection);
  app.use(cors(corsOptions));
  app.use(helmet({
    dnsPrefetchControl: {
      allow: true,
    },
  }));
  // home route
  // app.use('/', (req, res) => {
  //   console.log(req);
  //   res.send('Hello World!');
  // });
  app.use('/', Login);
  // app.use('*', FallBackRoute);

  // eslint-disable-next-line no-console
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

export default Run;
