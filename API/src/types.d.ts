export type NewUser = {
  firstName: string;
  lastName: string;
  birthday: Date;
  email: string;
  password: string;
};

export interface UserType extends NewUser {
  id: string;
}

export type LoginUserType = {
  email: string;
  password: string;
};
