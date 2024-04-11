import { UUID } from "typeorm/driver/mongodb/bson.typings"

export interface Form {
    uniqueId? : UUID;
    title? : string;
    name? : string;
    email? : string;
    phonenumber? : number;
    isGraduate? : boolean;
    getData(): any;
    create(): any;
}
