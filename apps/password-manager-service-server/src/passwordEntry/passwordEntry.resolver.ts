import * as graphql from "@nestjs/graphql";
import { PasswordEntryResolverBase } from "./base/passwordEntry.resolver.base";
import { PasswordEntry } from "./base/PasswordEntry";
import { PasswordEntryService } from "./passwordEntry.service";

@graphql.Resolver(() => PasswordEntry)
export class PasswordEntryResolver extends PasswordEntryResolverBase {
  constructor(protected readonly service: PasswordEntryService) {
    super(service);
  }
}
