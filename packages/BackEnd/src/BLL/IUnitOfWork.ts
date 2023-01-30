/**
 * The unit of work interface.
 * This interface will be implemented by the unit of work class.
 * The unit of work class will be used to communicate with the repos.
 * The repos will be used to communicate with the db.
 * The unit of work class will be used by the app manager.
 * The app manager will be used by the api.
 * The api will be used by the client.
 * The client will be used by the user.
 */

interface IUnitOfWork {
    // #region Properties
    id: string;
    // #endregion
    // #region Methods
    // #endregion
    // #region Constructors
    // #endregion
}

export default IUnitOfWork;
