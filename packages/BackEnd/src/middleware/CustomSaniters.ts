/**
 * This class will combine all the custom saniters and will be used to sanitize the request bodies.
 */
class CustomSanitizers {
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
}

export default CustomSanitizers;
