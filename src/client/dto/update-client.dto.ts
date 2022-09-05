import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { CreateClientDto } from './create-client.dto';

export class UpdateClientDto extends PartialType(CreateClientDto) {
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
