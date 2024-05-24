import { PasswordEntryCreateNestedManyWithoutCategoriesInput } from "./PasswordEntryCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  passwordEntries?: PasswordEntryCreateNestedManyWithoutCategoriesInput;
};
