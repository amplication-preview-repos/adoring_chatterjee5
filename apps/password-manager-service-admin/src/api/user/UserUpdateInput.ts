import { AuditLogUpdateManyWithoutUsersInput } from "./AuditLogUpdateManyWithoutUsersInput";
import { PasswordEntryUpdateManyWithoutUsersInput } from "./PasswordEntryUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  auditLogs?: AuditLogUpdateManyWithoutUsersInput;
  email?: string | null;
  password?: string | null;
  passwordEntries?: PasswordEntryUpdateManyWithoutUsersInput;
  username?: string | null;
};
