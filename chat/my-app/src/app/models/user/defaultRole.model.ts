import { UserRole } from "./userRole.model";

export class DefaultRole implements UserRole{
    
    role : string = "default";

    getRole(): string {
        return this.role;
    }

}