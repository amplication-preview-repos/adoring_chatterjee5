import { PasswordEntryUpdateManyWithoutCategoriesInput } from "./PasswordEntryUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  passwordEntries?: PasswordEntryUpdateManyWithoutCategoriesInput;
};
