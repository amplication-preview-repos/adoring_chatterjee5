import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AuditLogTitle } from "../auditLog/AuditLogTitle";
import { PasswordEntryTitle } from "../passwordEntry/PasswordEntryTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="auditLogs"
          reference="AuditLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AuditLogTitle} />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="password" source="password" />
        <ReferenceArrayInput
          source="passwordEntries"
          reference="PasswordEntry"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PasswordEntryTitle} />
        </ReferenceArrayInput>
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
