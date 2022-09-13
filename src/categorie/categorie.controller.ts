import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';

@Controller('categorie')
export class CategorieController {
  constructor(private readonly categorieService: CategorieService) {}

  @Post()
  create(@Body() createCategorieDto: CreateCategorieDto) {
    return this.categorieService.addCategorie(createCategorieDto);
  }

  @Get()
  findAll() {
    return this.categorieService.getCategories();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categorieService.getCategorieById(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategorieDto: UpdateCategorieDto,
  ) {
    return this.categorieService.UpdateCategorieDto(+id, updateCategorieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categorieService.deleteCategorie(+id);
  }
}
