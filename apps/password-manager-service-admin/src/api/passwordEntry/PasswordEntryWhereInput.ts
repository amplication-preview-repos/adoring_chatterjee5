import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PasswordEntryWhereInput = {
  category?: CategoryWhereUniqueInput;
  id?: StringFilter;
  notes?: StringNullableFilter;
  password?: StringNullableFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  username?: StringNullableFilter;
};
