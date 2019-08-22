import { DefaultRole } from "./defaultRole.model";
import { SuperAdminRole } from "./superAdminRole.model";
import { GroupAdminRole } from "./groupAdminRole.model";
import { GroupAssisRole } from "./groupAssisRole.model";

export abstract class UserRole{

    abstract role : string;

    abstract getRole() : string;

}
