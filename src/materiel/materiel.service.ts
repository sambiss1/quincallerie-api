import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMaterielDto } from './dto/create-materiel.dto';
import { UpdateMaterielDto } from './dto/update-materiel.dto';
import { Materiel } from './entities/materiel.entity';

@Injectable()
export class MaterielService {
  constructor(
    @InjectRepository(Materiel)
    private materielRepository: Repository<Materiel>,
  ) {}

  async findMaterielById(id: number) {
    const materiel = await this.materielRepository.findOne({
      where: { id: id },
    });
    if (!materiel) {
      throw new NotFoundException(`La Materiel d'id ${id} n'existe pas.`);
    }
    return materiel;
  }

  async getMateriels(): Promise<Materiel[]> {
    return await this.materielRepository.find();
  }

  async getMaterielById(id: number): Promise<Materiel> {
    return await this.findMaterielById(id);
  }

  async addMateriel(materiel: CreateMaterielDto): Promise<Materiel> {
    return await this.materielRepository.save(materiel);
  }

  async UpdateMaterielDto(
    id: number,
    Materiel: UpdateMaterielDto,
  ): Promise<Materiel> {
    const newMateriel = await this.materielRepository.preload({
      id,
      ...Materiel,
    });
    if (!newMateriel) {
      throw new NotFoundException(`La contraception d'id ${id} n'existe pas.`);
    }
    return await this.materielRepository.save(newMateriel);
  }

  async deleteMateriel(id: number): Promise<Materiel> {
    const materiel = await this.findMaterielById(id);
    return await this.materielRepository.remove(materiel);
  }
}
