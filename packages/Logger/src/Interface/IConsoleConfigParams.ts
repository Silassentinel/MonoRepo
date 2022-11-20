// #region imports
import COLORS from 'Enum/Colors';
import LAYOUT from 'Enum/Layout';
import MESSAGE_SEPERATOR from 'Enum/MessageSeperator';
// #endregion
/**
 * This interface will be used to type the params object passed to the ConsoleConfig class.
 */
interface IConsoleConfigParams {
    color: COLORS;
    table: boolean;
    spacing: number;
    messageSeperator: MESSAGE_SEPERATOR;
    layout: LAYOUT;
    isEncrypted: boolean;
}

export default IConsoleConfigParams;
