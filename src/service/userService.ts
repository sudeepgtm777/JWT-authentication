import userModel, { User } from '../model/userModel';

export function createUser(input: Partial<User>) {
  return userModel.create(input);
}
