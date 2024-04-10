import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { FormModule } from 'src/form/form.module';

@Module({
  imports: [FormModule],
  controllers: [ApiController]
})
export class ApiModule {}
