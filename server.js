const nodemailer = require('nodemailer');

const mail = async () => {
  try {
    let testAccount = await nodemailer.createTestAccount();
    const config = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: "your_email@gmail.com",
        pass: "your_password",
      },
    });
    const sendmailnow = await config.sendMail({
      from: 'test@gmail.com',
      to: 'vanan81073@peogi.com',
      subject: 'test',
      text: 'Hello, this is a test mail',
      html: '<h1>This is an HTML mail demo</h1>',
    });
    console.log('Message sent: %s', sendmailnow.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

mail().catch((e) => console.log(e));
