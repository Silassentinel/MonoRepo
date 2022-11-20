// #region imports
// #endregion

/**
 * This interface will be used to type the params object passed to the DBConfig class.
 */
interface IDBConfigParams {
    // #region props
    autoCloseTimeout: number,
    autoCloseInterval: number,
    autoClose: boolean,
    autoCleanUpInterval: number,
    autoCleanUp: boolean,
    reconnectInterval: number,
    reconnectTries: number,
    socketTimeoutMS: number,
    connectTimeoutMS: number,
    keepAliveInitialDelay: number,
    keepAlive: boolean,
    autoReconnect: boolean,
    debug: boolean,
    extra: unknown,
    ssl: boolean,
    propagateCreateError: boolean,
    createRetryIntervalMillis: number,
    createTimeoutMillis: number,
    connectionTimeoutMillis: number,
    idleTimeoutMillis: number,
    concurrentQueries: number,
    poolIdleTimeoutMillis: number,
    poolMin: number,
    poolMax: number,
    poolSize: number,
    isCompressed: boolean,
    isEncrypted: boolean,
    table: string,
    database: string,
    password: string,
    username: string,
    port: number,
    host: string,
    // #endregion
    // #region ctor
    // #endregion
    // #region methods
    // #region getters/setters
    // #endregion
    // #region public methods
    // #endregion
    // #region private helpers
    // #endregion
    // #endregion
 }

export default IDBConfigParams;
