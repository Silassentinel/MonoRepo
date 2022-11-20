/* eslint-disable no-unused-vars */
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
 interface IDBConfig {
    // #region props
    // #endregion
    // #region CTR
    // #endregion
    // #region methods
    // #region getters/Setters

    /**
       * This function will return the amount of time to wait before closing the connection.
       * @returns {number} Amount of time to wait before closing the connection.
       */
    GetAutoCloseTimeout : () => number;

    /**
       * This function will set the amount of time to wait before closing the connection.
       * @returns {number} Amount of time to wait before closing the connection.
       */
    GetAutoCloseInterval : ()=> number;

    /**
       * This function will return the flag whether to automatically close the connection or not.
       * @returns {boolean} Flag whether to automatically close the connection or not.
       */
    GetAutoClose : ()=> boolean;

    /**
       * This function will return the amount of time to wait before cleaning up the connection.
       * @returns {number} Amount of time to wait before cleaning up the connection.
       */
    GetAutoCleanUpInterval : () => number;

    /**
       * This function will return the flag whether to clean up the connection or not.
       * @returns {boolean} Flag whether to clean up the connection or not.
       */
    GetAutoCleanUp : () => boolean;

    /**
       * This function will return the amount of time to wait before retrying to reconnect.
       * @returns {number} Amount of time to wait before retrying to reconnect.
       */
    GetReconnectInterval : ()=> number;

    /**
       * This function will return the amount of reconnection tries.
       * @returns {number} Amount of reconnection tries.
       */
    GetReconnectTries : ()=> number;

    /**
       * This function will return the amount of time before the connection with the socket times out.
       * @returns {number} Amount of time before the connection with the socket times out.
       */
    GetSocketTimeoutMS : () => number;

    /**
       * This function will return the amount of time before the connection times out.
       * @returns {number} Amount of time before the connection times out.
       */
    GetConnectTimeoutMS : () => number;

    /**
      * This function will return the amount of time to wait to before setting up a keep alive connection.
      * @returns {number} Amount of time to wait to before setting up a keep alive connection.
      */
    GetKeepAliveInitialDelay :() => number;

    /**
       * This function will return the flag whether to keep the connection alive or not.
       * @returns {boolean} Flag whether to keep the connection alive or not.
       */
    GetKeepAlive : () => boolean;

    /**
       * This function will return the flag whether to automatically reconnect or not.
       * @returns {boolean} Flag whether to automatically reconnect or not.
       */
    GetAutoReconnect : () => boolean;

    /**
       * This function will return boolean whether to operate in debug mode.
       * @returns {boolean} Flag whether to use SSL or not.
       */
    GetDebug : () => boolean;

    /**
       * This function will return the extra.
       */
    GetExtra : () => any;

    /**
       * This function will return the flag whether to use SSL or not.
       * @returns {boolean} Flag whether to use SSL or not.
       */
    GetSsl : () => boolean;

    /**
       * This function will return the flag whether to propagate the create error or not.
       * @returns {boolean} Flag whether to propagate create error or not.
       */
    GetPropagateCreateError : () => boolean;

    /**
       * This function will return the amount of time to wait before retrying to connect.
       * @returns {number} Amount of time to wait before retrying to create the db.
       */
    GetCreateRetryIntervalMillis : () => number;

    /**
       * This function will return the amount of time before the db gets destroyed.
       * @returns {number} Amount of time to wait before retrying to create the db.
       */
    GetReapIntervalMillis : () => number;

    /**
       * This function will return the amount of time before the db gets destroyed.
       * @returns {number} Amounf ot time before the creation of the db times out.
       */
    GetCreateTimeoutMillis : () => number;

    /**
       * This function will return the amount of time before the connection times out.
       * @returns {number} Amount of time before the connection times out.
       */
    GetConnectionTimeoutMillis : () => number;

    /**
       * This function will return the amount of time before the connection times out whilest idling.
       * @returns {number} Amount of time whilest idle before the connection times out.
       */
    GetIdleTimeoutMillis : () => number;

    /**
       * This function will return the amoint of concurrent querries allowed.
       * @returns {number} Amount of concurrent queries allowed.
       */
    GetConcurrentQueries : () => number;

    /**
       * This function will retur the amount of time before the pool connection times out.
       * @returns {number} Amount of time before the pool connection times out.
       */
    GetPoolIdleTimeoutMillis : () => number;

    /**
       * This function will return the minimum amount of connections to keep in the pool. - strict minimum is 2.
       * @returns {number} Minimum amount of connections to keep in the pool.
       */
    GetPoolMin : () => number;

    /**
       * This function will return the maximum amount of connections to keep in the pool.
       * @returns {number} Maximum amount of connections to keep in the pool.
       */
    GetPoolMax : () => number;

    /**
       * This function will return the siez of the pool.
       * @returns {number} The current size of the pool.
       */
    GetPoolSize : () => number;

    /**
       * This function will return the flag whether the data should be compressed before sending it to the db.
       * @returns {boolean} Flag whether the data should be compressed before sending it to the db.
       */
    GetIsCompressed : () => boolean;

    /**
       * This function will hold the flag whether to encrypt the connection or not.
       * @returns {boolean} Flag whether to encrypt the connection or not.
       */
    GetIsEncrypted : () => boolean;

    /**
       * This function will return the name of the table.
       * @returns {string} Name of the table
       */
    GetTable : () => string;

    /**
       * This function will return the name of the database.
       * @returns {string} Name of the database.
       */
    GetDatabase : () => string;

    /**
       * This function will return the password of the database for the current user.
       * @returns {string} Gets the current users password.
       */
    GetPassword : () => string;

    /**
       * This function will return the username of the database for the current user.
       * @returns {string} Gets the current users username.
       */
    GetUser : () => string;

    /**
       * This function will return the port of the database.
       * @returns {number} Gets the current port.
       */
    GetPort : () => number;

    /**
       * This function will return the host to the database.
       * @returns {string} Gets the current host.
       */
    GetHost : () => string;
    // ------------------------------

    /**
       * This function will set the time out for autoclosing.
       * @param value {number} The time out for autoclosing in miliseconds.
       */
    SetAutoCloseTimeout : (value: number)=> void;

    /**
       * This function will set the interval between auto closes.
       * @param value {number} The interval between auto closes in miliseconds.
       */
    SetAutoCloseInterval : (value: number) => void;

    /**
       * This function will set the flag to auto close or not.
       * @param value {boolean} Flag whether to auto close or not.
       */
    SetAutoClose : (value: boolean) => void;

    /**
       * This function will set the auto clean up interval.
       * @param value {number} The interval between auto clean ups in miliseconds.
       */
    SetAutoCleanUpInterval : (value: number) =>void;

    /**
       * This function will set the flag to auto clean up.
       * @param value {boolean} Flag whether to auto clean up or not.
       */
    SetAutoCleanUp : (value: boolean) =>void;

    /**
       * This function will set the interval to recconnect.
       * @param value {number} The interval between reconnects in miliseconds.
       */
    SetReconnectInterval : (value: number) => void;

    /**
       * This function will set the amount of retries for reconnecting.
       * @param value {number} The amount of retries for reconnecting.
       */
    SetReconnectTries : (value: number) => void;

    /**
       * This function will set the timeout for the socket.
       * @param value {number} The timeout for the socket in miliseconds.
       */
    SetSocketTimeoutMS : (value: number) =>void;

    /**
       * This function will set the aùmount of time before the connection times out.
       */
    SetConnectTimeoutMS : (value: number) => void;

    /**
       * This function will set the wait before the first keep alive connection is made.
       * @param value {number} The wait before the first keep alive connection is made in miliseconds.
       */
    SetKeepAliveInitialDelay : (value: number) =>void;

    /**
       * This function will set the flag whether to keep the connection alive or not.
       * @param value {boolean} Flag whether to keep the connection alive or not.
       */
    SetKeepAlive : (value: boolean) => void;

    /**
       * This function will set the flag whether to automatically reconnect or not.
       * @param value {boolean} Flag whether to automatically reconnect or not.
       */
    SetAutoReconnect : (value: boolean) =>void;

    /**
       * This function whether to operate in debug mode.
       * @param value {boolean} Flag whether to operate in debug mode or not.
       */
    SetDebug : (value: boolean) =>void;

    /**
       * Set extra stuff
       * @param value
       */
    SetExtra : (value: unknown) => void;

    /**
       * This function will set the flag to use SSL.
       * @param value {boolean} Flag whether to use SSL or not.
       */
    SetSsl : (value: boolean) =>void;

    /**
       * This function will set the flag to allow propagation of errors.
       * @param value {boolean} Flag whether to allow propagation of errors or not.
       */
    SetPropagateCreateError : (value: boolean) => void;

    /**
       * This function will set the interval between retries to create the db.
       * @param value
       */
    SetCreateRetryIntervalMillis : (value: number) => void;

    /**
       * This function will set the interval between destroying the db.
       * @param value {number} The interval between destroying the db in miliseconds.
       */
    SetReapIntervalMillis : (value: number) => void;

    /**
       * This function will set the timeout for creating the db.
       * @param value
       */
    SetCreateTimeoutMillis : (value: number) => void;

    /**
       * This function will set the timeout for the connection.
       * @param value {number} The timeout for the connection in miliseconds.
       */
    SetConnectionTimeoutMillis : (value: number) => void;

    /**
       * This function will set the timeout for the idle connection.
       * @param value {number} The timeout for the idle connection in miliseconds.
       */
    SetIdleTimeoutMillis : (value: number) => void;

    /**
       * This function will set the amount of allowed concurrent queries.
       * @param value {number} The amount of allowed concurrent queries.
       */
    SetConcurrentQueries : (value: number) => void;

    /**
   * This function will set the amount of time before the idle pool connection times out.
   * @param value {number} The amount of time before the idle pool connection times out in miliseconds.
   */
    SetPoolIdleTimeoutMillis : (value: number) => void;

    /**
       * This function will set the minimum amount of connections in the pool. More than 1 is allowed.
       * @param value {number} The minimum amount of connections in the pool.
       */
    SetPoolMin : (value: number) => void;

    /**
       * This function will set the maximum amount of connections in the pool.
       * @param value {number} The maximum amount of connections in the pool.
       */
    SetPoolMax : (value: number) => void;

    /**
       * This function will set the current size of the pool.
       * @param value {number} The current size of the pool.
       */
    SetPoolSize : (value: number) => void;

    /**
       * This function will set the flag whether to compress the data or not.
       * @param value {boolean} Flag whether to compress the data or not.
       */
    SetIsCompressed : (value: boolean) => void;

    /**
       * This function will set the flag whether to encrypt the connection or not.
       * @param value {boolean} Flag whether to encrypt the connection or not.
       */
    SetIsEncrypted : (value: boolean) => void;

    /**
       * This function will set the table name.
       * @param value {string} The table name.
       */
    SetTable : (value: string) => void;

    /**
       * This function will set the database name.
       * @param value {string} The database name.
       */
    SetDatabase : (value: string) => void;

    /**
       * This function will set the password for the database.
       * @param value {string} The password for the database.
       */
    SetPassword : (value: string) => void;

    /**
       * This function will set the username for the database.
       * @param value {string} The username for the database.
       */
    SetUser : (value: string) => void;

    /**
       * This function will set the portnumber.
       * @param value {number} The portnumber.
       */
    SetPort : (value: number) => void;

    /**
       * This function will set the hostname to connect to thet db.
       * @param value {string} The hostname to connect to the db.
       */
    SetHost : (value: string) => void;

    // #endregion
    // #region private helpers
    //  #endregion
    // #endregion
  }

export default IDBConfig;
