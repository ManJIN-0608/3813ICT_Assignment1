import { UserRole } from "./userRole.model";

export class SuperAdminRole implements UserRole{
    
    role : string = "superAdmin";

    getRole(): string {
        return this.role;
    }
    
}