import { Category } from "../category/Category";
import { User } from "../user/User";

export type PasswordEntry = {
  category?: Category | null;
  createdAt: Date;
  id: string;
  notes: string | null;
  password: string | null;
  title: string | null;
  updatedAt: Date;
  url: string | null;
  user?: User | null;
  username: string | null;
};
