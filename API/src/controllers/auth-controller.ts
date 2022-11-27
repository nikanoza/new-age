import { Request, Response } from "express";
import { loginSchema, signUpSchema } from "schemas";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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

export const SignIn = async (req: Request, res: Response) => {
  const { body } = req;

  const validator = await loginSchema(body);
  const { value: data, error } = validator.validate(body);

  if (error) {
    return res.status(400).json(error.details);
  }

  const { email, password } = data;

  const user = await User.findOne({ email }).select("+password");
  const compare = await bcrypt.compare(password, user?.password || "");

  if (compare) {
    const signData = {
      firstName: user?.firstName,
      lastName: user?.lastName,
      birthday: user?.birthday,
      email: user?.email,
      id: user?.id,
    };

    const token = jwt.sign(signData, process.env.JWT_SECRET || "", {
      expiresIn: "1h",
    });

    return res.status(200).json({ token });
  }

  return res
    .status(401)
    .json({ message: "please, provide correct credentials..." });
};
