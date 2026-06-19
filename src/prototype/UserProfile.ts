import { UserProfilePrototype } from "./UserProfilePrototype";

export type Department = "finance" | "engineering" | "marketing";

export interface UserPermissions {
  canEditUsers: boolean;
  canApproveBudget: boolean;
  canAccessInternalTools: boolean;
}

export class UserProfile implements UserProfilePrototype {
  constructor(
    public username: string,
    public department: Department,
    public permissions: UserPermissions
  ) {}

  public clone(): UserProfile {
    return new UserProfile(this.username, this.department, {
      ...this.permissions,
    });
  }
}