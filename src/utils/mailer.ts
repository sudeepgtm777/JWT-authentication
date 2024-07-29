import nodemailer, { SendMailOptions } from 'nodemailer';
import config from 'config';
import log from './logger';

/** You don't need to create testCreds every time. **/
/*
async function createTestCreds() {
  const creds = await nodemailer.createTestAccount();
  console.log({ creds });
}

createTestCreds();
*/

const smtp = config.get<{
  user: string;
  pass: string;
  host: string;
  port: Number;
  secure: boolean;
}>('smtp');

const transporter = nodemailer.createTransport({
  ...smtp,
  auth: {
    user: smtp.user,
    pass: smtp.pass,
  },
} as any);

async function sendEmail(pay: SendMailOptions) {
  transporter.sendMail(pay, (err, info) => {
    if (err) {
      log.error(err, 'Error sending error');
      return;
    }

    log.info(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
  });
}

export default sendEmail;
