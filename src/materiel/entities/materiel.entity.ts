/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToMany, OneToOne, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

import { Categorie } from 'src/categorie/entities/categorie.entity';

@Entity('materiel')
export class Materiel {
    @PrimaryGeneratedColumn({ name: 'id_materiel' })
    id: number;

    @Column({ length: 50, name: 'nom_materiel' })
    nom_materiel: string;


    @Column({ length: 50, name: 'prix_unitaire' })
    prix_unitaire: string;

    // @JoinTable()
    @JoinColumn({ name: 'id_categorie' })
    @ManyToOne(() => Categorie, {
        eager: true,
        cascade: true
    })
    categorie: Categorie[]

}