"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmailTemplate = void 0;
const verifyEmailTemplate = (name, verifyURL) => {
  const readmeLink = `https://github.com/MdNaimRipto/next-level-b5-portfolio-backend`;
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2>Hi ${name},</h2>
      <p>Thank you for registering. Please verify your email by clicking the button below:</p>
      <a href="${verifyURL}" style="
          display: inline-block;
          padding: 10px 20px;
          background-color: #4CAF50;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          margin: 15px 0;
        ">Verify Email</a>
      <br/>
      <p>Regards,<br/>Your Project Team</p>
    </div>
  `;
};
exports.verifyEmailTemplate = verifyEmailTemplate;
