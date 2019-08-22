import { UserRole } from "./userRole.model";

export class GroupAdminRole implements UserRole{
    
    role : string = "groupAdmin";

    getRole(): string {
        return this.role;
    }
    
}