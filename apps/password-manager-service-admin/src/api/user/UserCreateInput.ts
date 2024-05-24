import { AuditLogCreateNestedManyWithoutUsersInput } from "./AuditLogCreateNestedManyWithoutUsersInput";
import { PasswordEntryCreateNestedManyWithoutUsersInput } from "./PasswordEntryCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  auditLogs?: AuditLogCreateNestedManyWithoutUsersInput;
  email?: string | null;
  password?: string | null;
  passwordEntries?: PasswordEntryCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
