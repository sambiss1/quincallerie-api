import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import Categorie from './entities/categorie.entity';

@Injectable()
export class CategorieService {
  constructor(
    @InjectRepository(Categorie)
    private categorieRepository: Repository<Categorie>,
  ) {}

  async findCategorieById(id: number) {
    const categorie = await this.categorieRepository.findOne({
      where: { id: id },
    });
    if (!categorie) {
      throw new NotFoundException(`La categorie d'id ${id} n'existe pas.`);
    }
    return categorie;
  }

  async getCategories(): Promise<Categorie[]> {
    return await this.categorieRepository.find();
  }

  async getCategorieById(id: number): Promise<Categorie> {
    return await this.findCategorieById(id);
  }

  async addCategorie(Categorie: CreateCategorieDto): Promise<Categorie> {
    return await this.categorieRepository.save(Categorie);
  }

  async UpdateCategorieDto(
    id: number,
    categorie: UpdateCategorieDto,
  ): Promise<Categorie> {
    const newCategorie = await this.categorieRepository.preload({
      id,
      ...categorie,
    });
    if (!newCategorie) {
      throw new NotFoundException(`La contraception d'id ${id} n'existe pas.`);
    }
    return await this.categorieRepository.save(newCategorie);
  }

  async deleteCategorie(id: number): Promise<Categorie> {
    const categorie = await this.findCategorieById(id);
    return await this.categorieRepository.remove(categorie);
  }
}
