import { Module } from '@nestjs/common';
import { EmployesService } from './employes.service';
import { EmployesController } from './employes.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [EmployesController],
  providers: [EmployesService],
})
export class EmployesModule {}
