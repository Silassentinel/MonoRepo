// #region imports
import IDBConfig from 'Interface/IDBConfig';
import IDBConfigParams from 'Interface/IDBConfigParams';
// #endregion
/**
 * This class will contain the database configuration
 * which must be agnostic to the database type.
 * Should support:
 * - MSSQL
 * - MySQL
 * - Oracle
 * - MongoDB
 * - PostgreSQL
 * - SQLite
 */
class DBConfig implements IDBConfig {
  // #region props
  /**
     * This property wil hold the hoststring to connect to the database.
     * @private
     * @type {string}
     */
  private _host!: string;

  /**
     * This property will hold the port to connect to the database.
     * @private
     * @type {number}
     */
  private _port!: number;

  /**
     * This property will hold the username to connect to the database.
     * @private
     * @type {string}
     */
  private _user!: string;

  /**
     * This property will hold the password to connect to the database.
     * @private
     * @type {string}
     */
  private _password!: string;

  /**
     * This property will hold the database name to connect to the database.
     * @private
     * @type {string}
     */
  private _database!: string;

  /**
     * This property will hold the table name to connect to the database.
     * @private
     * @type {string}
     */
  private _table!: string;

  /**
     * This property will hold the flag to encrypt the database connection or not.
     * @private
     * @type {boolean}
     */
  private _isEncrypted!: boolean;

  /**
     * This property will hold the flag to compress the data before writing to the database or not.
     * @private
     * @type {boolean}
     */
  private _isCompressed!: boolean;

  /**
     * This property will hold the pool size of the connection.
     * @private
     * @type {number}
     */
  private _poolSize!: number;

  /**
     * This property will hold the maximum size of the pool.
     * @private
     * @type {number}
     */
  private _poolMax!: number;

  /**
     * This property will hold the minimum size of the pool.
     * @private
     * @type {number}
     */
  private _poolMin!: number;

  /**
     * This property will hold the timeout when idling the connection before closing.
     * @private
     * @type {number}
     */
  private _poolIdleTimeoutMillis!: number;

  /**
     * This property will hold the amount of connections allowed at the same time.
     * @private
     * @type {number}
     */
  private _concurrentQueries!: number;

  /**
     * This property will hold the amount of time in milliseconds to wait before timing out.
     * @private
     * @type {number}
     */
  private _idleTimeoutMillis!: number;

  /**
     * This property will hold the amount of time to wait to setup a connection.
     * @private
     * @type {number}
     */
  private _connectionTimeoutMillis!: number;

  /**
     * This property will hold the amount of time to wait for creation of the db.
     * @private
     * @type {number}
     */
  private _createTimeoutMillis!: number;

  /**
   * This property will hold the amount of time to wait for the db to be destroyed.
   * @private
   * @type {number}
   */
  private _reapIntervalMillis!: number;

  /**
     * This property will hold the amount of time to retry to create the db.
     * @private
     * @type {number}
     */
  private _createRetryIntervalMillis!: number;

  /**
     * This property will hold the flag whether to let propagate the error or not.
     * @private
     * @type {boolean}
     */
  private _propagateCreateError!: boolean;

  /**
     * This property will hold the flag whether to use SSL or not.
     * @private
     * @type {boolean}
     */
  private _ssl!: boolean;

  /**
     * Extra! Extra! Read all about it!
     */
  private _extra!: unknown;

  /**
     * Flag for debug mode.
     * @private
     * @type {boolean}
     */
  private _debug!: boolean;

  /**
     * This property will hold the flag whether to automatically reconnect or not.
     * @private
     * @type {boolean}
     */
  private _autoReconnect!: boolean;

  /**
     * This property will hold the flag whether to keep the connection alive or not.
     * @private
     * @type {boolean}
     */
  private _keepAlive!: boolean;

  /**
     * This property will hold the amount of time to wait to before setting up a keep alive connection.
     * @private
     * @type {number}
     */
  private _keepAliveInitialDelay!: number;

  /**
     * This property will hold the amount of time before the connection times out.
     * @private
     * @type {number}
     */
  private _connectTimeoutMS!: number;

  /**
     * This property will hold the amount of time before the connection with the socket times out.
     * @private
     * @type {number}
     */
  private _socketTimeoutMS!: number;

  /**
     * This property will hold the amount of reconnection tries.
     * @private
     * @type {number}
     */
  private _reconnectTries!: number;

  /**
     * This property will hold the amount of time to wait before retrying to reconnect.
     */
  private _reconnectInterval!: number;

  /**
     * This property will hold the flag whether to clean up the connection or not.
     */
  private _autoCleanUp!: boolean;

  /**
     * This property will hold the amount of time to wait before cleaning up the connection.
     */
  private _autoCleanUpInterval!: number;

  /**
     * This property will hold the flag whether to automatically close the connection or not.
     */
  private _autoClose!: boolean;

  /**
     * This property will hold the amount of time to wait before closing the connection.
     */
  private _autoCloseInterval!: number;

  /**
     * This property will hold the amount of time before the connection times out.
     */
  private _autoCloseTimeout!: number;

  // #endregion
  // #region CTR
  constructor(dbConfigParams : IDBConfigParams) {
    this.SetAutoCloseTimeout(dbConfigParams.autoCloseTimeout);
    this.SetAutoCloseInterval(dbConfigParams.autoCloseInterval);
    this.SetAutoClose(dbConfigParams.autoClose);
    this.SetAutoCleanUpInterval(dbConfigParams.autoCleanUpInterval);
    this.SetAutoCleanUp(dbConfigParams.autoCleanUp);
    this.SetReconnectInterval(dbConfigParams.reconnectInterval);
    this.SetReconnectTries(dbConfigParams.reconnectTries);
    this.SetSocketTimeoutMS(dbConfigParams.socketTimeoutMS);
    this.SetConnectTimeoutMS(dbConfigParams.connectTimeoutMS);
    this.SetKeepAliveInitialDelay(dbConfigParams.keepAliveInitialDelay);
    this.SetKeepAlive(dbConfigParams.keepAlive);
    this.SetAutoReconnect(dbConfigParams.autoReconnect);
    this.SetDebug(dbConfigParams.debug);
    this.SetExtra(dbConfigParams.extra);
    this.SetSsl(dbConfigParams.ssl);
    this.SetPropagateCreateError(dbConfigParams.propagateCreateError);
    this.SetCreateRetryIntervalMillis(dbConfigParams.createRetryIntervalMillis);
    this.SetCreateTimeoutMillis(dbConfigParams.createTimeoutMillis);
    this.SetConnectionTimeoutMillis(dbConfigParams.connectionTimeoutMillis);
    this.SetIdleTimeoutMillis(dbConfigParams.idleTimeoutMillis);
    this.SetConcurrentQueries(dbConfigParams.concurrentQueries);
    this.SetPoolIdleTimeoutMillis(dbConfigParams.poolIdleTimeoutMillis);
    this.SetPoolMin(dbConfigParams.poolMin);
    this.SetPoolMax(dbConfigParams.poolMax);
    this.SetPoolSize(dbConfigParams.poolSize);
    this.SetIsCompressed(dbConfigParams.isCompressed);
    this.SetIsEncrypted(dbConfigParams.isEncrypted);
    this.SetTable(dbConfigParams.table);
    this.SetDatabase(dbConfigParams.database);
    this.SetPassword(dbConfigParams.password);
    this.SetUser(dbConfigParams.username);
    this.SetPort(dbConfigParams.port);
    this.SetHost(dbConfigParams.host);
  }
  // #endregion
  // #region methods
  // #region getters/Setters

  /**
     * This function will return the amount of time to wait before closing the connection.
     * @returns {number} Amount of time to wait before closing the connection.
     */
  GetAutoCloseTimeout = (): number => this._autoCloseTimeout;

  /**
     * This function will set the amount of time to wait before closing the connection.
     * @returns {number} Amount of time to wait before closing the connection.
     */
  GetAutoCloseInterval = (): number => this._autoCloseInterval;

  /**
     * This function will return the flag whether to automatically close the connection or not.
     * @returns {boolean} Flag whether to automatically close the connection or not.
     */
  GetAutoClose = (): boolean => this._autoClose;

  /**
     * This function will return the amount of time to wait before cleaning up the connection.
     * @returns {number} Amount of time to wait before cleaning up the connection.
     */
  GetAutoCleanUpInterval = (): number => this._autoCleanUpInterval;

  /**
     * This function will return the flag whether to clean up the connection or not.
     * @returns {boolean} Flag whether to clean up the connection or not.
     */
  GetAutoCleanUp = (): boolean => this._autoCleanUp;

  /**
     * This function will return the amount of time to wait before retrying to reconnect.
     * @returns {number} Amount of time to wait before retrying to reconnect.
     */
  GetReconnectInterval = (): number => this._reconnectInterval;

  /**
     * This function will return the amount of reconnection tries.
     * @returns {number} Amount of reconnection tries.
     */
  GetReconnectTries = (): number => this._reconnectTries;

  /**
     * This function will return the amount of time before the connection with the socket times out.
     * @returns {number} Amount of time before the connection with the socket times out.
     */
  GetSocketTimeoutMS = (): number => this._socketTimeoutMS;

  /**
     * This function will return the amount of time before the connection times out.
     * @returns {number} Amount of time before the connection times out.
     */
  GetConnectTimeoutMS = (): number => this._connectTimeoutMS;

  /**
    * This function will return the amount of time to wait to before setting up a keep alive connection.
    * @returns {number} Amount of time to wait to before setting up a keep alive connection.
    */
  GetKeepAliveInitialDelay = (): number => this._keepAliveInitialDelay;

  /**
     * This function will return the flag whether to keep the connection alive or not.
     * @returns {boolean} Flag whether to keep the connection alive or not.
     */
  GetKeepAlive = (): boolean => this._keepAlive;

  /**
     * This function will return the flag whether to automatically reconnect or not.
     * @returns {boolean} Flag whether to automatically reconnect or not.
     */
  GetAutoReconnect = (): boolean => this._autoReconnect;

  /**
     * This function will return boolean whether to operate in debug mode.
     * @returns {boolean} Flag whether to use SSL or not.
     */
  GetDebug = (): boolean => this._debug;

  /**
     * This function will return the extra.
     */
  GetExtra = (): any => this._extra;

  /**
     * This function will return the flag whether to use SSL or not.
     * @returns {boolean} Flag whether to use SSL or not.
     */
  GetSsl = (): boolean => this._ssl;

  /**
     * This function will return the flag whether to propagate the create error or not.
     * @returns {boolean} Flag whether to propagate create error or not.
     */
  GetPropagateCreateError = (): boolean => this._propagateCreateError;

  /**
     * This function will return the amount of time to wait before retrying to connect.
     * @returns {number} Amount of time to wait before retrying to create the db.
     */
  GetCreateRetryIntervalMillis = (): number => this._createRetryIntervalMillis;

  /**
     * This function will return the amount of time before the db gets destroyed.
     * @returns {number} Amount of time to wait before retrying to create the db.
     */
  GetReapIntervalMillis = (): number => this._reapIntervalMillis;

  /**
     * This function will return the amount of time before the db gets destroyed.
     * @returns {number} Amounf ot time before the creation of the db times out.
     */
  GetCreateTimeoutMillis = (): number => this._createTimeoutMillis;

  /**
     * This function will return the amount of time before the connection times out.
     * @returns {number} Amount of time before the connection times out.
     */
  GetConnectionTimeoutMillis = (): number => this._connectionTimeoutMillis;

  /**
     * This function will return the amount of time before the connection times out whilest idling.
     * @returns {number} Amount of time whilest idle before the connection times out.
     */
  GetIdleTimeoutMillis = (): number => this._idleTimeoutMillis;

  /**
     * This function will return the amoint of concurrent querries allowed.
     * @returns {number} Amount of concurrent queries allowed.
     */
  GetConcurrentQueries = (): number => this._concurrentQueries;

  /**
     * This function will retur the amount of time before the pool connection times out.
     * @returns {number} Amount of time before the pool connection times out.
     */
  GetPoolIdleTimeoutMillis = (): number => this._poolIdleTimeoutMillis;

  /**
     * This function will return the minimum amount of connections to keep in the pool. - strict minimum is 2.
     * @returns {number} Minimum amount of connections to keep in the pool.
     */
  GetPoolMin = (): number => this._poolMin;

  /**
     * This function will return the maximum amount of connections to keep in the pool.
     * @returns {number} Maximum amount of connections to keep in the pool.
     */
  GetPoolMax = (): number => this._poolMax;

  /**
     * This function will return the siez of the pool.
     * @returns {number} The current size of the pool.
     */
  GetPoolSize = (): number => this._poolSize;

  /**
     * This function will return the flag whether the data should be compressed before sending it to the db.
     * @returns {boolean} Flag whether the data should be compressed before sending it to the db.
     */
  GetIsCompressed = (): boolean => this._isCompressed;

  /**
     * This function will hold the flag whether to encrypt the connection or not.
     * @returns {boolean} Flag whether to encrypt the connection or not.
     */
  GetIsEncrypted = (): boolean => this._isEncrypted;

  /**
     * This function will return the name of the table.
     * @returns {string} Name of the table
     */
  GetTable = (): string => this._table;

  /**
     * This function will return the name of the database.
     * @returns {string} Name of the database.
     */
  GetDatabase = (): string => this._database;

  /**
     * This function will return the password of the database for the current user.
     * @returns {string} Gets the current users password.
     */
  GetPassword = (): string => this._password;

  /**
     * This function will return the username of the database for the current user.
     * @returns {string} Gets the current users username.
     */
  GetUser = (): string => this._user;

  /**
     * This function will return the port of the database.
     * @returns {number} Gets the current port.
     */
  GetPort = (): number => this._port;

  /**
     * This function will return the host to the database.
     * @returns {string} Gets the current host.
     */
  GetHost = (): string => this._host;
  // ------------------------------

  /**
     * This function will set the time out for autoclosing.
     * @param value {number} The time out for autoclosing in miliseconds.
     */
  SetAutoCloseTimeout = (value: number): void => {
    this._autoCloseTimeout = value;
  };

  /**
     * This function will set the interval between auto closes.
     * @param value {number} The interval between auto closes in miliseconds.
     */
  SetAutoCloseInterval = (value: number): void => {
    this._autoCloseInterval = value;
  };

  /**
     * This function will set the flag to auto close or not.
     * @param value {boolean} Flag whether to auto close or not.
     */
  SetAutoClose = (value: boolean): void => {
    this._autoClose = value;
  };

  /**
     * This function will set the auto clean up interval.
     * @param value {number} The interval between auto clean ups in miliseconds.
     */
  SetAutoCleanUpInterval = (value: number): void => {
    this._autoCleanUpInterval = value;
  };

  /**
     * This function will set the flag to auto clean up.
     * @param value {boolean} Flag whether to auto clean up or not.
     */
  SetAutoCleanUp = (value: boolean): void => {
    this._autoCleanUp = value;
  };

  /**
     * This function will set the interval to recconnect.
     * @param value {number} The interval between reconnects in miliseconds.
     */
  SetReconnectInterval = (value: number): void => {
    this._reconnectInterval = value;
  };

  /**
     * This function will set the amount of retries for reconnecting.
     * @param value {number} The amount of retries for reconnecting.
     */
  SetReconnectTries = (value: number): void => {
    this._reconnectTries = value;
  };

  /**
     * This function will set the timeout for the socket.
     * @param value {number} The timeout for the socket in miliseconds.
     */
  SetSocketTimeoutMS = (value: number): void => {
    this._socketTimeoutMS = value;
  };

  /**
     * This function will set the aùmount of time before the connection times out.
     */
  SetConnectTimeoutMS = (value: number): void => {
    this._connectTimeoutMS = value;
  };

  /**
     * This function will set the wait before the first keep alive connection is made.
     * @param value {number} The wait before the first keep alive connection is made in miliseconds.
     */
  SetKeepAliveInitialDelay = (value: number): void => {
    this._keepAliveInitialDelay = value;
  };

  /**
     * This function will set the flag whether to keep the connection alive or not.
     * @param value {boolean} Flag whether to keep the connection alive or not.
     */
  SetKeepAlive = (value: boolean): void => {
    this._keepAlive = value;
  };

  /**
     * This function will set the flag whether to automatically reconnect or not.
     * @param value {boolean} Flag whether to automatically reconnect or not.
     */
  SetAutoReconnect = (value: boolean): void => {
    this._autoReconnect = value;
  };

  /**
     * This function whether to operate in debug mode.
     * @param value {boolean} Flag whether to operate in debug mode or not.
     */
  SetDebug = (value: boolean): void => {
    this._debug = value;
  };

  /**
     * Set extra stuff
     * @param value
     */
  SetExtra = (value: unknown): void => {
    this._extra = value;
  };

  /**
     * This function will set the flag to use SSL.
     * @param value {boolean} Flag whether to use SSL or not.
     */
  SetSsl = (value: boolean): void => {
    this._ssl = value;
  };

  /**
     * This function will set the flag to allow propagation of errors.
     * @param value {boolean} Flag whether to allow propagation of errors or not.
     */
  SetPropagateCreateError = (value: boolean): void => {
    this._propagateCreateError = value;
  };

  /**
     * This function will set the interval between retries to create the db.
     * @param value
     */
  SetCreateRetryIntervalMillis = (value: number): void => {
    this._createRetryIntervalMillis = value;
  };

  /**
     * This function will set the interval between destroying the db.
     * @param value {number} The interval between destroying the db in miliseconds.
     */
  SetReapIntervalMillis = (value: number): void => {
    this._reapIntervalMillis = value;
  };

  /**
     * This function will set the timeout for creating the db.
     * @param value
     */
  SetCreateTimeoutMillis = (value: number): void => {
    this._createTimeoutMillis = value;
  };

  /**
     * This function will set the timeout for the connection.
     * @param value {number} The timeout for the connection in miliseconds.
     */
  SetConnectionTimeoutMillis = (value: number): void => {
    this._connectionTimeoutMillis = value;
  };

  /**
     * This function will set the timeout for the idle connection.
     * @param value {number} The timeout for the idle connection in miliseconds.
     */
  SetIdleTimeoutMillis = (value: number): void => {
    this._idleTimeoutMillis = value;
  };

  /**
     * This function will set the amount of allowed concurrent queries.
     * @param value {number} The amount of allowed concurrent queries.
     */
  SetConcurrentQueries = (value: number): void => {
    this._concurrentQueries = value;
  };

  /**
 * This function will set the amount of time before the idle pool connection times out.
 * @param value {number} The amount of time before the idle pool connection times out in miliseconds.
 */
  SetPoolIdleTimeoutMillis = (value: number): void => {
    this._poolIdleTimeoutMillis = value;
  };

  /**
     * This function will set the minimum amount of connections in the pool. More than 1 is allowed.
     * @param value {number} The minimum amount of connections in the pool.
     */
  SetPoolMin = (value: number): void => {
    this._poolMin = value;
  };

  /**
     * This function will set the maximum amount of connections in the pool.
     * @param value {number} The maximum amount of connections in the pool.
     */
  SetPoolMax = (value: number): void => {
    this._poolMax = value;
  };

  /**
     * This function will set the current size of the pool.
     * @param value {number} The current size of the pool.
     */
  SetPoolSize = (value: number): void => {
    this._poolSize = value;
  };

  /**
     * This function will set the flag whether to compress the data or not.
     * @param value {boolean} Flag whether to compress the data or not.
     */
  SetIsCompressed = (value: boolean): void => {
    this._isCompressed = value;
  };

  /**
     * This function will set the flag whether to encrypt the connection or not.
     * @param value {boolean} Flag whether to encrypt the connection or not.
     */
  SetIsEncrypted = (value: boolean): void => {
    this._isEncrypted = value;
  };

  /**
     * This function will set the table name.
     * @param value {string} The table name.
     */
  SetTable = (value: string): void => {
    this._table = value;
  };

  /**
     * This function will set the database name.
     * @param value {string} The database name.
     */
  SetDatabase = (value: string): void => {
    this._database = value;
  };

  /**
     * This function will set the password for the database.
     * @param value {string} The password for the database.
     */
  SetPassword = (value: string): void => {
    this._password = value;
  };

  /**
     * This function will set the username for the database.
     * @param value {string} The username for the database.
     */
  SetUser = (value: string): void => {
    this._user = value;
  };

  /**
     * This function will set the portnumber.
     * @param value {number} The portnumber.
     */
  SetPort = (value: number): void => {
    this._port = value;
  };

  /**
     * This function will set the hostname to connect to thet db.
     * @param value {string} The hostname to connect to the db.
     */
  SetHost = (value: string): void => {
    this._host = value;
  };

  // #endregion
  // #region private helpers
  //  #endregion
  // #endregion
}

export default DBConfig;
