const nodemailer = require('nodemailer');
require('dotenv').config();

const { MAIL, PASS, MY_MAIL } = process.env;
const transporter = nodemailer.createTransport({
  service: 'mail.ru',
  auth: {
    user: MAIL,
    pass: PASS,
  },
});

const mailOptions = (from, content) => ({
  from: `${from.name} ${MAIL}`,
  to: MY_MAIL,
  subject: 'Contact Form!',
  html: `<p>Message: ${content.message}</p>`,
});

module.exports = { mailOptions, transporter };
