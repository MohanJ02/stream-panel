import nodemailer from 'nodemailer';

import { EMAIL_REGEX, IS_PRODUCTION } from './constants';

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
  text: string;
};

const smtpOptions = {
  secure: IS_PRODUCTION,
  host: process.env.SMTP_HOST || 'localhost',
  port: Number(process.env.SMTP_PORT || 1025),
  auth: {
    user: process.env.SMTP_USER || 'mailpit',
    pass: process.env.SMTP_PASSWORD || 'topsecret',
  },
};

export const sendEmail = async (data: EmailPayload) => {
  const isValidEmail = EMAIL_REGEX.test(data.to);

  if (!isValidEmail) {
    throw new Error('Invalid email address');
  }

  const transporter = nodemailer.createTransport(smtpOptions);

  return await transporter.sendMail({
    from: process.env.EMAIL_FROM ?? 'StreamPanel Team <noreply@sieutoc.website>',
    ...data,
  });
};
