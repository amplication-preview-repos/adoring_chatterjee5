import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PasswordEntryListRelationFilter } from "../passwordEntry/PasswordEntryListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  passwordEntries?: PasswordEntryListRelationFilter;
};
