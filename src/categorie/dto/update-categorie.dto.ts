/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateCategorieDto } from './create-categorie.dto';

export class UpdateCategorieDto extends PartialType(CreateCategorieDto) {
    @IsNotEmpty()
    @IsString()
    categorie: string;
}
