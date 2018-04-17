const nodemailer = require('nodemailer');
const view = require('./view');
// eslint-disable-next-line
if (process.env.NODE_ENV === 'development') require('dotenv').config();

const { MAIL, PASS, MY_MAIL } = process.env;
const transporter = nodemailer.createTransport({
  service: 'mail.ru',
  auth: {
    user: MAIL,
    pass: PASS,
  },
});

const mailOptions = (from, message) => ({
  from: `${from.name} ${MAIL}`,
  to: MY_MAIL,
  subject: 'vamosgs.github.io - Contact Form!',
  html: view({ from, message }),
});

module.exports = { mailOptions, transporter };
