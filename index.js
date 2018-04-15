const { json } = require('micro');
const { transporter, mailOptions } = require('./src/mail');

module.exports = async (req) => {
  const userData = await json(req);
  const sendData = {
    from: { name: userData.name, mail: userData.mail },
    message: userData.message,
  };

  await transporter.sendMail(mailOptions(sendData.from, sendData.message), async (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
  return {
    data: 'test',
  };
};
