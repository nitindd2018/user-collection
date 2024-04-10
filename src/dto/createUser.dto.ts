import { BlobOptions } from "buffer";
import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";
import { UUID } from "crypto";

export class createUserDto {
    @IsNotEmpty()
    uniqueId: UUID
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
    @IsNumber()
    phonenumber: number;
    @IsNotEmpty()
    isGraduate: boolean;
}