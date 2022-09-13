/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, ManyToMany, OneToOne } from 'typeorm';
import { Materiel } from 'src/materiel/entities/materiel.entity';
@Entity('categorie')
export class Categorie {
    @PrimaryGeneratedColumn({ name: 'id_categorie' })
    id: number;

    @Column({ length: 50, name: 'categorie' })
    categorie: string;

    @JoinColumn({ name: 'id_materiel' })
    @OneToMany(() => Materiel, materiel => materiel.categorie)
    materiel: Materiel;
}

export default Categorie
