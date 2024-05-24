import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PasswordEntryService } from "./passwordEntry.service";
import { PasswordEntryControllerBase } from "./base/passwordEntry.controller.base";

@swagger.ApiTags("passwordEntries")
@common.Controller("passwordEntries")
export class PasswordEntryController extends PasswordEntryControllerBase {
  constructor(protected readonly service: PasswordEntryService) {
    super(service);
  }
}
