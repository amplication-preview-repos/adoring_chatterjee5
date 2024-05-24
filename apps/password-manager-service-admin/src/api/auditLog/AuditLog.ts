import { User } from "../user/User";

export type AuditLog = {
  action: string | null;
  createdAt: Date;
  entityId: string | null;
  entityName: string | null;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
