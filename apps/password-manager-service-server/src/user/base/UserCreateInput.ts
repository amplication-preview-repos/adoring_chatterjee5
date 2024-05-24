/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AuditLogCreateNestedManyWithoutUsersInput } from "./AuditLogCreateNestedManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { PasswordEntryCreateNestedManyWithoutUsersInput } from "./PasswordEntryCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => AuditLogCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AuditLogCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AuditLogCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  auditLogs?: AuditLogCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string | null;

  @ApiProperty({
    required: false,
    type: () => PasswordEntryCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PasswordEntryCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PasswordEntryCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  passwordEntries?: PasswordEntryCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string | null;
}

export { UserCreateInput as UserCreateInput };