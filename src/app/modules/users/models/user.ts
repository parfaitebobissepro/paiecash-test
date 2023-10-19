import { ROLES_USER } from "src/app/utils/enums";
import { Company } from "../../companies/models/company";

export class User{
    id: number;
    name: string;
    email: string;
    phone?: string;
    company?: number;
    active?: boolean;
    role?:ROLES_USER;
    password?:string;

    constructor(user: any) {
        this.id = this.id = Date.now();;
        this.name = user.name;
        this.email = user.email;
        this.active = user.active;
        this.phone = user.phone;
        this.company = user.company;
        this.role = user.role;
        this.password = user.password;
    }
}