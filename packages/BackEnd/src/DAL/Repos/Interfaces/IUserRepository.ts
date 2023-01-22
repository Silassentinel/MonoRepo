/**
 * This repository will execute the crud's for the user entity.
 */

interface IUserRepository {

    // #region Properties
    // #endregion

    // #region Methods
    /**
     * This method will create a user in the db.
     * @param user The user to create.
     * @returns The created user.
     * @throws Error if the user is undefined.
     * @throws Error if the user is null.
     * @throws Error if the user is invalid.
     * @throws Error if the user is already in the db.
     */
   Create(user: User): Promise<User>

    /**
     * This method will read a user from the db.
     * @param id The id of the user to read.
     * @returns The read user.
     * @throws Error if the id is undefined.
     * @throws Error if the id is null.
     * @throws Error if the id is invalid.
     * @throws Error if the user is not in the db.
     */
GetUserById (id: string): Promise<User>

    /**
     * This method will read a user from the db.
     * @param username The username of the user to read.
     * @returns The read user.
     * @throws Error if the username is undefined.
     * @throws Error if the username is null.
     * @throws Error if the username is invalid.
     * @throws Error if the user is not in the db.
     */
    GetUserByUsername (username: string): Promise<User>
    /**
     * This method will read a user from the db.
     * @param email The email of the user to read.
     * @returns The read user.
     * @throws Error if the email is undefined.
     * @throws Error if the email is null.
     * @throws Error if the email is invalid.
     * @throws Error if the user is not in the db.
     */
    GetUserByEmail (email: string): Promise<User>

    /**
     * This method will read a user from the db.
     * @param user The user to read.
     * @returns The read user.
     * @throws Error if the user is undefined.
     * @throws Error if the user is null.
     * @throws Error if the user is invalid.
     * @throws Error if the user is not in the db.
     */
GetUser (user: User): Promise<User>

    /**
     * This method will update a user in the db.
     * @param user The user to update.
     * @returns The updated user.
     * @throws Error if the user is undefined.
     * @throws Error if the user is null.
     * @throws Error if the user is invalid.
     * @throws Error if the user is not in the db.
     */
    Update (user: User): Promise<User>

    /**
     * This method will delete a user from the db.
     * @param id The id of the user to delete.
     * @returns The deleted user.
     * @throws Error if the id is undefined.
     * @throws Error if the id is null.
     * @throws Error if the id is invalid.
     * @throws Error if the user is not in the db.
     */
    Delete (id: string): Promise<User>
    // #endregion
    // #region Constructors
    // #endregion

}

export default IUserRepository;
