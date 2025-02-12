import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
  body: object({
    firstName: string({
      required_error: 'First Name is required!!!',
    }),
    lastName: string({
      required_error: 'Last Name is required!!!',
    }),
    password: string({
      required_error: 'Password is required!!!',
    }).min(6, 'Password is short!! Minimum 6 characters'),
    passwordConfirmation: string({
      required_error: 'Password Confirmation is required!!!',
    }),
    email: string({
      required_error: 'Email is required!!!',
    }).email('Not a valid email!!'),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: `Password doesn't match!!`,
    path: ['passwordConfirmation'],
  }),
});

export type createUserInput = TypeOf<typeof createUserSchema>['body'];
