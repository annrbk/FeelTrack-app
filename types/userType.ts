export type User = {
  id: string;
  name: string;
  email: string;
  password?: string;
  number?: string;
  dateOfBirth?: string | null;
  avatar?: string | null;
};
