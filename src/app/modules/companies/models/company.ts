export class Company {
    id: number;
    name: string;
    uin: string;
    address: string;
    phone?: string;
    city: string;
    website?: string;

    constructor(company: any) {
        this.id = Date.now();
        this.name = company.name;
        this.uin = company.uin;
        this.address = company.address;
        this.phone = company.phone;
        this.city = company.city;
        this.website = company.website;
    }
}
