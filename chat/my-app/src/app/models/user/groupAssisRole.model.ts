import { UserRole } from "./userRole.model";

export class GroupAssisRole implements UserRole{
    
    role : string = "groupAssis";

    getRole(): string {
        return this.role;
    }
    
}