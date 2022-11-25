import { Request, Response } from "express";
import { signUpSchema } from "schemas";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { User } from "models";

export const signUp = async (req: Request, res: Response) => {
  const { body } = req;

  const validator = await signUpSchema(body);
  const { value: data, error } = validator.validate(body);

  if (error) {
    return res.status(400).json(error.details);
  }

  const { firstName, lastName, birthday, email, password } = data;

  const id = uuidv4();
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  await User.create({
    firstName,
    lastName,
    birthday,
    email,
    password: hashedPassword,
    id,
  });

  return res.status(201).json({ message: "new user create successfully" });
};
