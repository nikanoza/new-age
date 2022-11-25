import Joi from "joi";
import { User } from "models";
import { NewUser, UserType } from "types";

const determineIfUserExists =
  (user: UserType | null) => (value: string, helpers: any) => {
    if (user) {
      return helpers.message("user with this mail already exists");
    }
    return value;
  };

const signUpSchema = async (data: NewUser) => {
  const user = await User.findOne({ email: data.email });

  return Joi.object<NewUser>({
    firstName: Joi.string()
      .pattern(/^[a-zA-z]*$/)
      .required()
      .messages({
        "string.base": "firstName must be a string",
        "string.pattern": "firstName should include only english letters",
        "any.required": "firstName is required",
      }),
    lastName: Joi.string()
      .pattern(/^[a-zA-z]*$/)
      .required()
      .messages({
        "string.base": "lastName must be a string",
        "string.pattern": "lastName should include only english letters",
        "any.required": "lastName is required",
      }),
    birthday: Joi.date().min("1920-01-01").max("now").required().messages({
      "date.base": "birthday must be a date",
      "date.min": "birthday should be 1920-01-01 or greater",
      "date.max": "birthday should be today or less",
      "any.required": "birthday is required",
    }),
    email: Joi.string()
      .email()
      .custom(determineIfUserExists(user))
      .pattern(/^.*@newage.io$/)
      .required()
      .messages({
        "string.base": "email must be a string",
        "string.email": "email should be email format",
        "string.patter": "email should be finished with @newage.io",
        "any.required": "email is required",
      }),
  });
};

export default signUpSchema;
