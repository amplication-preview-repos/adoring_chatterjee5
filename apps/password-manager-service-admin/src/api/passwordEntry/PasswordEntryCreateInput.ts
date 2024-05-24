import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PasswordEntryCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  notes?: string | null;
  password?: string | null;
  title?: string | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
  username?: string | null;
};
