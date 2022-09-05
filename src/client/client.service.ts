/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientEntity } from './entities/client.entity';

@Injectable()
export class ClientService {
  create(createClientDto: CreateClientDto) {
    throw new Error('Method not implemented.');
  }
  findAll() {
    throw new Error('Method not implemented.');
  }
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateClientDto: UpdateClientDto) {
    throw new Error('Method not implemented.');
  }
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(ClientEntity)
    private clientRepository: Repository<ClientEntity>,
  ) {}

  async findClientById(id: number) {
    const client = await this.clientRepository.findOne({
      where: { id: id },
    });
    if (!client) {
      throw new NotFoundException(`Le Client d'id ${id} n'existe pas.`);
    }
    return client;
  }

  async getClients(): Promise<ClientEntity[]> {
    return await this.clientRepository.find();
  }

  async getClientById(id: number): Promise<ClientEntity> {
    return await this.findClientById(id);
  }

  async addClient(Client: CreateClientDto): Promise<ClientEntity> {
    return await this.clientRepository.save(Client);
  }

  async UpdateClientDto(
    id: number,
    client: UpdateClientDto,
  ): Promise<ClientEntity> {
    const newClient = await this.clientRepository.preload({
      id,
      ...client,
    });
    if (!newClient) {
      throw new NotFoundException(`La contraception d'id ${id} n'existe pas.`);
    }
    return await this.clientRepository.save(newClient);
  }

  async deleteClient(id: number): Promise<ClientEntity> {
    const client = await this.findClientById(id);
    return await this.clientRepository.remove(client);
  }
}
