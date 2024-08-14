import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmployesService } from './employes.service';
import { Prisma } from '@prisma/client';


@Controller('employes')
export class EmployesController {
  constructor(private readonly employesService: EmployesService) {}

  @Post()
  create(@Body() createEmployeDto: Prisma.EmployeCreateInput) {
    return this.employesService.create(createEmployeDto);
  }

  @Get()
  findAll(@Query('role')role?:'INTERN'|'ENGINEER'|'ADMIN') {
    return this.employesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeDto: Prisma.EmployeUpdateInput) {
    return this.employesService.update(+id, updateEmployeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employesService.remove(+id);
  }
}
