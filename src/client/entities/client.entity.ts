/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('client')
export class ClientEntity {
    @PrimaryGeneratedColumn({ name: 'id_client' })
    id: number;

    @Column({ length: 50, name: 'nom_client' })
    client_name: string;

    @Column({ length: 50, name: 'prenom_client' })
    client_firstName: string;

    @Column({ length: 50, name: 'adresse_client' })
    client_adresse: string;

    @Column({  name: 'telephone_client' })
    client_phone: string;

    @Column({ length: 50, name: 'email_client' })
    client_email: string;
}
