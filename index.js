const { json, send } = require('micro');
const { transporter, mailOptions } = require('./src/mail');
const cors = require('micro-cors')();
// eslint-disable-next-line
if (process.env.NODE_ENV === 'development') require('dotenv').config();

module.exports = cors(async (req, res) => {
  if (req.headers.authorization !== process.env.AUTH) {
    return {
      success: false,
      message: "You don't have access",
    };
  }
  const userData = await json(req);
  const sendData = {
    from: { name: userData.name, mail: userData.mail },
    message: userData.message,
  };
  await transporter.sendMail(mailOptions(sendData.from, sendData.message), (err) => {
    if (err) send(res, 505, { success: false, message: 'Somthing went wrong', err });
    else send(res, 200, { success: true, message: 'Mail successfully sent' });
  });
});
