import { DefaultRole }    from "../models/user/defaultRole.model";
import { SuperAdminRole } from "../models/user/superAdminRole.model";
import { GroupAdminRole } from "../models/user/groupAdminRole.model";
import { GroupAssisRole } from "../models/user/groupAssisRole.model";

export abstract class UserRoleHelper{
    
    public getRoleObject(role:string){
        switch(role) {
            case "default":
                return (new DefaultRole());
            case "groupAdmin":
                return (new GroupAdminRole());
            case "groupAssis":
                return (new GroupAssisRole());
            case "superAdmin":
                return (new SuperAdminRole());
            default:
                return (new DefaultRole());
        }
    }

}