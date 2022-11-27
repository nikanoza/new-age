import Joi from "joi";
import { User } from "models";
import { LoginUserType, UserType } from "types";

const determineIfUserExists =
  (user: UserType | null) => (value: string, helpers: any) => {
    if (!user) {
      return helpers.message("user with this email did not find");
    }
    return value;
  };

const loginSchema = async (data: LoginUserType) => {
  const user = await User.findOne({ email: data.email });

  return Joi.object<LoginUserType>({
    email: Joi.string()
      .custom(determineIfUserExists(user))
      .email()
      .required()
      .messages({
        "string.base": "email must be a string",
        "string.email": "email should be email format",
        "any.required": "email is required",
      }),
    password: Joi.string().required().messages({
      "string.base": "password must be a string",
      "any.required": "password is required",
    }),
  });
};

export default loginSchema;
