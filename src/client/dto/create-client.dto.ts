/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateClientDto {
    @IsNotEmpty()
    @IsString()
    client_name: string;

    @IsOptional()
    @IsString()
    client_firstName: string;

    @IsOptional()
    @IsString()
    client_adresse: string;

    @IsOptional()
    @IsString()
    client_phone: string;

    @IsOptional()
    @IsString()
    client_email: string;
}
