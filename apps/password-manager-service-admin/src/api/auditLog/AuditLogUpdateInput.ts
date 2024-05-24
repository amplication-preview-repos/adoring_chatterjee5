import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditLogUpdateInput = {
  action?: string | null;
  entityId?: string | null;
  entityName?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
