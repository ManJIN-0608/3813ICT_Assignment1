import { DefaultRole }    from "../models/user/defaultRole.model";
import { SuperAdminRole } from "../models/user/superAdminRole.model";
import { GroupAdminRole } from "../models/user/groupAdminRole.model";
import { GroupAssisRole } from "../models/user/groupAssisRole.model";
import { User }           from "../models/user/user.model";
import { UserRoleHelper } from "./userRole.helper";

//helper abstract class used to help parse User objects with their role objects intact.
export abstract class UserJSONHelper{
    
    public parse(json:string) : User{
        var userObject = JSON.parse(json);                                                         //parse JSON string into object
        userObject.__proto__ = User.prototype;                                                     //convert parsed JSON object into a User object
        userObject.role = UserRoleHelper.prototype.getRoleObject(userObject.role.role);            //convert the role from empty object to a UserRole object based on stored value

        return userObject;
    }
}