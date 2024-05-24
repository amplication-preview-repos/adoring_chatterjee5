import { AuditLog } from "../auditLog/AuditLog";
import { PasswordEntry } from "../passwordEntry/PasswordEntry";

export type User = {
  auditLogs?: Array<AuditLog>;
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  passwordEntries?: Array<PasswordEntry>;
  updatedAt: Date;
  username: string | null;
};
