// #region imports
import ToolBox from '@silassentinel/toolbox/src/Class/ToolBox';
import EmailSenderError from 'utilities/Errors/EmailSenderError';
import { createTransport } from 'nodemailer';
import { SentMessageInfo } from 'nodemailer/lib/smtp-transport';
import dotenv from 'dotenv';
// #endregion

// #region config
dotenv.config();
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
  private to!: string;

  /**
   * From address
   * {string}
  */
  private from!: string;

  /**
   * Subject of the email
   * {string}
   */
  private subject!: string;

  /**
   * Body of the email
   * {string}
   */
  private body!: string;

  /**
   * A boolean flag to control whether to send the email body as html or not.
   */
  private isHtml!: boolean;

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
    this.SetFrom(from);
    this.SetSubject(subject);
    this.SetBody(body);
    this.SetIsHtml(isHtml);
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
    if (!this.to) throw new EmailSenderError('To is required');
    return this.to;
  }

  /**
   * Returns the email address to send from.
   * @returns {string} The email address to send from.
   */
  private GetFrom() {
    if (!this.from) throw new EmailSenderError('From is required');
    return this.from;
  }

  /**
   * Returns the subject of the email.
   * @returns {string} The subject of the email.
   */
  private GetSubject() {
    if (!this.subject) throw new EmailSenderError('Subject is required');
    return this.subject;
  }

  /**
   * Returns the body of the email.
   * @returns {string} The body of the email.
   */
  private GetBody() {
    if (!this.body) throw new EmailSenderError('Body is required');
    return this.body;
  }

  /**
   * Returns the isHtml flag.
   * @returns {boolean} true if body is html
   */
  private GetIsHtml() {
    // check if isHtml is not default
    if (this.isHtml === undefined) throw new EmailSenderError('isHtml is required');
    return this.isHtml;
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

  /**
   * Sets the subject of the email.
   * @param subject {string} subject of the email
   */
  private SetSubject(subject: string) {
    if (ToolBox.IsNullOrUndefined(subject)) throw new EmailSenderError('Subject is required');
    if (ToolBox.IsStringEmpty(subject)) throw new EmailSenderError('Subject is required');
    this.subject = subject;
  }

  /**
   * Sets the body of the email.
   * @param body {string} body of the email
   */
  private SetBody(body: string) {
    if (ToolBox.IsNullOrUndefined(body)) throw new EmailSenderError('Body is required');
    if (ToolBox.IsStringEmpty(body)) throw new EmailSenderError('Body is required');
    this.body = body;
  }

  /**
   * Sets the isHtml flag.
   * @param isHtml {boolean} true if body is html
   */
  private SetIsHtml(isHtml: boolean) {
    if (ToolBox.IsNullOrUndefined(isHtml)) throw new EmailSenderError('isHtml is required');
    this.isHtml = isHtml;
  }
  // #endregion
  // #endregion

  /**
 * This function will send an e-mail using nodemailer and return true if the email was sent (check delivery report)
    * @returns {Promise<boolean>} true if email was sent, false otherwise
 */
  SendEmail = async (): Promise<boolean> => {
    if (ToolBox.IsNullOrUndefined(process.env.EMAIL_HOST)) throw new EmailSenderError('EMAIL_HOST is required');
    const transporter = createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const info: SentMessageInfo = await transporter.sendMail({
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
