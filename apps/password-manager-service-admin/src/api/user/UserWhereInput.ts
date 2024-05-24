import { AuditLogListRelationFilter } from "../auditLog/AuditLogListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PasswordEntryListRelationFilter } from "../passwordEntry/PasswordEntryListRelationFilter";

export type UserWhereInput = {
  auditLogs?: AuditLogListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  passwordEntries?: PasswordEntryListRelationFilter;
  username?: StringNullableFilter;
};
