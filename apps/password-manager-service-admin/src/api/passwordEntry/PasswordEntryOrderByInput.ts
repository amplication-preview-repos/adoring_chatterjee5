import { SortOrder } from "../../util/SortOrder";

export type PasswordEntryOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  password?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  userId?: SortOrder;
  username?: SortOrder;
};
