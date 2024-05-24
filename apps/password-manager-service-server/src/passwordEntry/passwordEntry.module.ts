import { Module } from "@nestjs/common";
import { PasswordEntryModuleBase } from "./base/passwordEntry.module.base";
import { PasswordEntryService } from "./passwordEntry.service";
import { PasswordEntryController } from "./passwordEntry.controller";
import { PasswordEntryResolver } from "./passwordEntry.resolver";

@Module({
  imports: [PasswordEntryModuleBase],
  controllers: [PasswordEntryController],
  providers: [PasswordEntryService, PasswordEntryResolver],
  exports: [PasswordEntryService],
})
export class PasswordEntryModule {}
