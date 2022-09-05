/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

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
    @IsNumber()
    client_phone: number;

    @IsOptional()
    @IsString()
    client_email: string;
}
