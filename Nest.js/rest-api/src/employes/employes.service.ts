import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';


@Injectable()
export class EmployesService {
  constructor(private readonly databaseService:DatabaseService){}
   async create(createEmployeDto: Prisma.EmployeCreateInput) {
    return this.databaseService.employe.create({
      data:createEmployeDto
    })
  }

  async findAll(role?:'INTERN'|'ENGINEER'|'ADMIN') {
 
    if(role) 
    return this.databaseService.employe.findMany({
      where:{
         role,
      }
    })
    return this.databaseService.employe.findMany();  
  }

  async findOne(id: number) {
    return  this.databaseService.employe.findUnique({
      where:{
        id,
      }
    })
  }

  async update(id: number, updateEmployeDto: Prisma.EmployeUpdateInput) {
    return this.databaseService.employe.update({
      where:{
        id,
      },
      data:updateEmployeDto
    })
  }

  async remove(id: number) {
    return this.databaseService.employe.delete({
      where:{
        id,
      }
    })
  }
}
