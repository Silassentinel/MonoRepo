// #region imports
import ToolBox from '@silassentinel/toolbox/src/Class/ToolBox';
import EmailSenderError from 'utilities/Errors/EmailSenderError';
import { createTransport } from 'nodemailer';
// #endregion

// #region config
// #endregion

/**
 * This class will be used to send emails.
 */

class EmailSender {
  // #region props
  /**
   * To addres
   * {string}
   */
  private to: string;

  /**
   * From address
   * {string}
  */
  private from: string;

  /**
   * Subject of the email
   * {string}
   */
  private subject: string;

  /**
   * Body of the email
   * {string}
   */
  private body: string;

  // #endregion
  // #region constructor
  /**
     * This constructor will create a new instance of the email sender.
     * @param to {string} email address to send to
     * @param from {string} email address to send from
     * @param subject {string} subject of the email
     * @param body {string} body of the email
     * @param isHtml {boolean} true if body is html
     */
  constructor(to: string, from: string, subject: string, body: string, isHtml: boolean) {
    if (!to) throw new EmailSenderError('To is required');
    if (!from) throw new EmailSenderError('From is required');
    if (!subject) throw new EmailSenderError('Subject is required');
    if (!body) throw new EmailSenderError('Body is required');
    if (!isHtml) throw new EmailSenderError('isHtml is required');
    this.SetTo(to);
    this.from = from;
    this.subject = subject;
    this.body = body;
  }

  // #endregion
  // #region methods
  // #region getters/setters
  // #region Getters
  /**
   * Returns the email address to send to.
   * @returns {string} The email address to send to.
   */
  private GetTo(): string {
    if (this.to) return this.to;
    throw new EmailSenderError('To is required');
  }

  private GetFrom() {
    if (!this.from) throw new EmailSenderError('From is required');
  }

  // #endregion
  // #region Setters
  /**
   * Sets the email address to send to.
   * @param to {string} email address to send to
   */
  private SetTo(to: string) {
    if (ToolBox.IsNullOrUndefined(to)) throw new EmailSenderError('To is required');
    if (ToolBox.IsStringEmpty(to)) throw new EmailSenderError('To is required');
    this.to = to;
  }

  /**
   * Sets the email address to send from.
   * @param from {string} email address to send from
   */
  private SetFrom(from: string) {
    if (ToolBox.IsNullOrUndefined(from)) throw new EmailSenderError('From is required');
    if (ToolBox.IsStringEmpty(from)) throw new EmailSenderError('From is required');
    this.from = from;
  }

  // #endregion
  // #endregion
  /**
 * This function will send an e-mail using nodemailer and return true if the email was sent (check delivery report)
    * @returns {Promise<boolean>} true if email was sent, false otherwise
 */
  SendEmail = async (): Promise<boolean> => {
    const transporter = createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const info = await transporter.sendMail({
      from: this.from,
      to: this.to,
      subject: this.subject,
      html: this.body,
    });
    if (info) return Promise.resolve(true);
    return Promise.resolve(false);
  };
  // #endregion
}
export default EmailSender;
