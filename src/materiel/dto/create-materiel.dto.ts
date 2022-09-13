/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateMaterielDto {
    @IsNotEmpty()
    @IsString()
    nom_materiel: string;

    @IsNotEmpty()
    @IsString()
    prix_unitaire: string;
}
