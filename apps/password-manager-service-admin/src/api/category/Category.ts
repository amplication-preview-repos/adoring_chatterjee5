import { PasswordEntry } from "../passwordEntry/PasswordEntry";

export type Category = {
  createdAt: Date;
  id: string;
  name: string | null;
  passwordEntries?: Array<PasswordEntry>;
  updatedAt: Date;
};
