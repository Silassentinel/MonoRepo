/* eslint-disable no-useless-escape */
/**
 * This class will combine all the custom saniters and will be used to sanitize the request bodies.
 */
class CustomSanitizers {
// #region Public Methods

  // #region verification
  /**
     * This function will check a value if it contains uppercase characters
     * @param value The value to check
     * @throws Error if the value's length is 0
     * @returns True if the value contains uppercase characters, false otherwise
     */
  static ContainsUpperCase(value: string): boolean {
    // if value length is 0 throw error
    if (value.length <= 0) throw new Error('Length of value must be bigger than 0');
    // if value contains upper case return true
    return value.match(/[A-Z]/) !== null;
  }

  /**
   * This function will check a value if it contains lowercase characters
   */
  static ContainsLowerCase(value: string): boolean {
    // if value length is 0 throw error
    if (value.length <= 0) throw new Error('Length of value must be bigger than 0');
    // if value contains lower case return true
    return value.match(/[a-z]/) !== null;
  }

  /**
   * This function will check a value if it contains numbers
   * @param value The value to check
   * @throws Error if the value's length is 0
   * @returns True if the value contains numbers, false otherwise
   */
  static ContainsNumbers(value: string): boolean {
    // if value length is 0 throw error
    if (value.length <= 0) throw new Error('Length of value must be bigger than 0');
    // if value contains numbers return true
    return value.match(/[0-9]/) !== null;
  }

  /**
   * This function will check a value if it contains special characters
   * @param value The value to check
   * @throws Error if the value's length is 0
   * @returns True if the value contains special characters, false otherwise
   */
  static ContainsSpecialCharacters(value: string): boolean {
    // if value length is 0 throw error
    if (value.length <= 0) throw new Error('Length of value must be bigger than 0');
    // if value contains special characters return true
    return value.match(/[!@#$%^&*(),.?":{}|<>]/) !== null;
  }
  // #endregion

  // #region security

  /**
   * This function will check if a path traversal attack is being performed
   * @param value The value to check
   * @throws Error if the value's length is 0
   * @returns True if the value contains path traversal attack, false otherwise
   * @see https://owasp.org/search/?searchString=%2FPath_Traversal
   */
  static PathTraversalAttack(value: string): boolean {
    // if value length is 0 throw error
    if (value.length <= 0) throw new Error('Length of value must be bigger than 0');
    // if value contains path traversal attack return true
    return value.match(/(\.\.\/|\.\/)/) !== null;
  }

  /**
   * This function will check if a SQL injection attack is being performed
   * @param value The value to check
   * @throws Error if the value's length is 0
   * @returns True if the value contains SQL injection attack, false otherwise
   * @see https://owasp.org/search/?searchString=%2FSQL_Injection
   */
  static SQLInjectionAttack(value: string): boolean {
    // if value length is 0 throw error
    if (value.length <= 0) throw new Error('Length of value must be bigger than 0');
    // if value contains SQL injection attack return true
    return value.match(/(\%27|\')|(\-\-)|(\%23)|(#)/) !== null;
  }

  /**
   * This function will check if a XSS attack is being performed
   * @param value The value to check
   * @throws Error if the value's length is 0
   * @returns True if the value contains XSS attack, false otherwise
   * @see https://owasp.org/search/?searchString=%2Fxss/
   */
  static XSSAttack(value: string): boolean {
    // if value length is 0 throw error
    if (value.length <= 0) throw new Error('Length of value must be bigger than 0');
    // if value contains XSS attack return true
    return value.match(/((\%3C)|<)((\%2F)|\/)*[a-z0-9\%]+((\%3E)|>)/) !== null;
  }

  /**
   * This function will check if a CSRF attack is being performed
   * @param value The value to check
   * @throws Error if the value's length is 0
   * @returns True if the value contains CSRF attack, false otherwise
   * @see https://owasp.org/search/?searchString=%2Fcsrf
   */
  static CSRFAttack(value: string): boolean {
    // if value length is 0 throw error
    if (value.length <= 0) throw new Error('Length of value must be bigger than 0');
    // if value contains CSRF attack return true
    return value.match(/((\%3C)|<)[\s\S]*((\%3E)|>)/) !== null;
  }

  /**
   * This function will check if a RFI attack is being performed
   * @param value The value to check
   * @throws Error if the value's length is 0
   * @returns True if the value contains RFI attack, false otherwise
   * @see https://owasp.org/search/?searchString=%2FRemote_File_Inclusion
   */
  static RFIAttack(value: string): boolean {
    // if value length is 0 throw error
    if (value.length <= 0) throw new Error('Length of value must be bigger than 0');
    // if value contains RFI attack return true
    return value.match(/((\%3C)|<)[\s\S]*((\%3E)|>)/) !== null;
  }

  /**
   * This function will check if a LFI attack is being performed
   * @param value The value to check
   * @throws Error if the value's length is 0
   * @returns True if the value contains LFI attack, false otherwise
   * @see https://owasp.org/search/?searchString=%2FLocal_File_Inclusion
   */
  static LFIAttack(value: string): boolean {
    // if value length is 0 throw error
    if (value.length <= 0) throw new Error('Length of value must be bigger than 0');
    // if value contains LFI attack return true
    return value.match(/((\%3C)|<)[\s\S]*((\%3E)|>)/) !== null;
  }

  /**
   * This function will check if a CRLF attack is being performed
   * @param value The value to check
   * @throws Error if the value's length is 0
   * @returns True if the value contains CRLF attack, false otherwise
   * @see https://owasp.org/search/?searchString=%2FCRLF_Injection
   */
  static CRLFAttack(value: string): boolean {
    // if value length is 0 throw error
    if (value.length <= 0) throw new Error('Length of value must be bigger than 0');
    // if value contains CRLF attack return true
    return value.match(/((\%0A)|(\%0D)|\n+|\r+)((\%0A)|(\%0D)|\n+|\r+)/) !== null;
  }

  /**
   * This function will check if a HTTP Response Splitting attack is being performed
   * @param value The value to check
   * @throws Error if the value's length is 0
   * @returns True if the value contains HTTP Response Splitting attack, false otherwise
   * @see https://owasp.org/search/?searchString=%2FHTTP_Response_Splitting
   */
  static HTTPResponseSplittingAttack(value: string): boolean {
    // if value length is 0 throw error
    if (value.length <= 0) throw new Error('Length of value must be bigger than 0');
    // if value contains HTTP Response Splitting attack return true
    return value.match(/(\%0D\%0A)|(\%0A\%0D)|(\%0A)|(\%0D)|(\n+)|(\r+)/) !== null;
  }

  /**
   * This function will check if a HTTP Parameter Pollution attack is being performed
   * @param value The value to check
   * @throws Error if the value's length is 0
   * @returns True if the value contains HTTP Parameter Pollution attack, false otherwise
   * @see https://owasp.org/search/?searchString=%2FHTTP_Parameter_Pollution
   */
  static HTTPParameterPollutionAttack(value: string): boolean {
    // if value length is 0 throw error
    if (value.length <= 0) throw new Error('Length of value must be bigger than 0');
    // if value contains HTTP Parameter Pollution attack return true
    return value.match(/((\%3B)|;)[\s\S]*((\%3D)|=)/) !== null;
  }

  /**
   * This function will check if a HTTP Header Injection attack is being performed
   * @param value The value to check
   * @throws Error if the value's length is 0
   * @returns True if the value contains HTTP Header Injection attack, false otherwise
   * @see https://owasp.org/search/?searchString=%2FHTTP_Header_Injection
   */
  static HTTPHeaderInjectionAttack(value: string): boolean {
    // if value length is 0 throw error
    if (value.length <= 0) throw new Error('Length of value must be bigger than 0');
    // if value contains HTTP Header Injection attack return true
    return value.match(/((\%0A)|(\%0D)|\n+|\r+)[\s\S]*((\%3A)|:)/) !== null;
  }
  // #endregion

// #endregion
}

export default CustomSanitizers;
