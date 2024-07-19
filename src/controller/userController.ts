import { Request, Response } from 'express';
import { createUserInput } from '../schema/userSchema';
import { createUser } from '../service/userService';

export async function createUserHandler(
  req: Request<{}, {}, createUserInput>,
  res: Response
) {
  const body = req.body;

  try {
    const user = await createUser(body);

    return res.send('User successfully created!!');
  } catch (err: any) {
    if (err.code === 11000) {
      return res.status(409).send('Email already exists!!');
    }

    return res.status(500).send(err);
  }
}
