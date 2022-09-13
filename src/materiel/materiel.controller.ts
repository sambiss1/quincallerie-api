import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MaterielService } from './materiel.service';
import { CreateMaterielDto } from './dto/create-materiel.dto';
import { UpdateMaterielDto } from './dto/update-materiel.dto';


@Controller('materiel')
export class MaterielController {
  constructor(private readonly materielService: MaterielService) {}

  @Post()
  create(@Body() createMaterielDto: CreateMaterielDto) {
    return this.materielService.addMateriel(createMaterielDto);
  }

  @Get()
  findAll() {
    return this.materielService.getMateriels();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materielService.findMaterielById(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMaterielDto: UpdateMaterielDto,
  ) {
    return this.materielService.UpdateMaterielDto(+id, updateMaterielDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materielService.deleteMateriel(+id);
  }
}
