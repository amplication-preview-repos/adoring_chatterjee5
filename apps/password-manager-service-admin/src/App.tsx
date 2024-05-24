import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AuditLogList } from "./auditLog/AuditLogList";
import { AuditLogCreate } from "./auditLog/AuditLogCreate";
import { AuditLogEdit } from "./auditLog/AuditLogEdit";
import { AuditLogShow } from "./auditLog/AuditLogShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PasswordEntryList } from "./passwordEntry/PasswordEntryList";
import { PasswordEntryCreate } from "./passwordEntry/PasswordEntryCreate";
import { PasswordEntryEdit } from "./passwordEntry/PasswordEntryEdit";
import { PasswordEntryShow } from "./passwordEntry/PasswordEntryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PasswordManagerService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AuditLog"
          list={AuditLogList}
          edit={AuditLogEdit}
          create={AuditLogCreate}
          show={AuditLogShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="PasswordEntry"
          list={PasswordEntryList}
          edit={PasswordEntryEdit}
          create={PasswordEntryCreate}
          show={PasswordEntryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
