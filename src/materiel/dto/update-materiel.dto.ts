/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateMaterielDto } from './create-materiel.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateMaterielDto extends PartialType(CreateMaterielDto) {

    @IsNotEmpty()
    @IsString()
    nom_materiel: string;

    @IsNotEmpty()
    @IsString()
    prix_unitaire: string;
}
