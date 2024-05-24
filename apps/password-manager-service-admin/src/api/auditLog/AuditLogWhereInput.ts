import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditLogWhereInput = {
  action?: StringNullableFilter;
  entityId?: StringNullableFilter;
  entityName?: StringNullableFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
