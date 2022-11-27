import Joi from "joi";
import { User } from "models";
import { UpdateUserType, UserType } from "types";

const determineIfUserExist =
  (user: UserType | null) => (value: string, helpers: any) => {
    if (!user) {
      return helpers.message("user with this id did not find");
    }
    return value;
  };

const updateUserSchema = async (data: UpdateUserType) => {
  const user = await User.findOne({ id: data.id });

  return Joi.object<UpdateUserType>({
    firstName: Joi.string()
      .pattern(/^[a-zA-z]*$/)
      .required()
      .messages({
        "string.base": "firstName must be a string",
        "string.pattern.base": "firstName should include only english letters",
        "any.required": "firstName is required",
      }),
    lastName: Joi.string()
      .pattern(/^[a-zA-z]*$/)
      .required()
      .messages({
        "string.base": "lastName must be a string",
        "string.pattern.base": "lastName should include only english letters",
        "any.required": "lastName is required",
      }),
    id: Joi.string().custom(determineIfUserExist(user)).required().messages({
      "string.base": "id must be a string",
      "any.required": "id must be required",
    }),
  });
};

export default updateUserSchema;
