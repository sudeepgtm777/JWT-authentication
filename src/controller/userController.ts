import { Request, Response } from 'express';
import { createUserInput } from '../schema/userSchema';
import { createUser } from '../service/userService';
import sendEmail from '../utils/mailer';

export async function createUserHandler(
  req: Request<{}, {}, createUserInput>,
  res: Response
) {
  const body = req.body;

  try {
    const user = await createUser(body);

    await sendEmail({
      from: 'test@example.com',
      to: user.email,
      subject: 'Please verify your account!!',
      text: `Verification code ${user.verificationCode}. Id: ${user._id}`
    });

    return res.send('User successfully created!!');
  } catch (err: any) {
    if (err.code === 11000) {
      return res.status(409).send('Email already exists!!');
    }

    return res.status(500).send(err);
  }
}
