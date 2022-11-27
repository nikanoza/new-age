import { Request, Response } from "express";
import { User } from "models";
import { updateUserSchema } from "schemas";

export const updateUser = async (req: Request, res: Response) => {
  console.log(req.params);
  const paramsId = req.params.userId;
  console.log(paramsId);
  const { body } = req;

  const validator = await updateUserSchema({ ...body, id: paramsId });
  const { value: data, error } = validator.validate({ ...body, id: paramsId });

  if (error) {
    return res.status(401).json(error.details);
  }

  const { firstName, lastName, id } = data;

  const user = await User.findOneAndUpdate({ id }, { firstName, lastName });

  const updatedUser = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    birthday: user?.birthday,
    email: user?.email,
    id: user?.id,
  };

  return res.status(200).json(updatedUser);
};
