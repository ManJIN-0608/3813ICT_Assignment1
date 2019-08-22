import { UserRole } from "./userRole.model";
import { DefaultRole } from "./defaultRole.model";
import { GroupAdminRole } from "./groupAdminRole.model";
import { GroupAssisRole } from "./groupAssisRole.model";
import { SuperAdminRole } from "./superAdminRole.model";

export class User {
    private username: string;
    private password: string;
    private email: string;
    public role: UserRole;

    constructor(username:string, password:string, email:string) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = new DefaultRole();        
    }

    public getUsername(){
        return this.username;
    }
    setUsername(username:string){
        this.username = username;
    }

    
    getPassword(){
        return this.password;
    }
    setPassword(password:string){
        //pass hashed passwords into object
        this.password = password;
    }
    

    getEmail(){
        return this.email;
    }
    setEmail(email:string){
        this.email = email;
    }


    getRole(){
        return this.role.getRole();
    }
    setRole(role:UserRole){
        this.role = role;
    }
    removeRole(){
        this.role = null;
    }
 


    

    
}
