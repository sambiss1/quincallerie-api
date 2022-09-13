/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateCategorieDto {
    @IsNotEmpty()
    @IsString()
    categorie: string;
}
