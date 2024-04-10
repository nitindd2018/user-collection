import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './form/form.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from './form/form.entity';
import { ApiModule } from './api/api.module';

@Module({
  imports: [FormModule,
            TypeOrmModule.forRoot({
              type: 'mariadb',
              host: '10.102.32.196',
              port: 3306,
              username: 'development',
              password: 'Admin@123',
              database: 'nestApp',
              entities: [Form],
              synchronize: true,
            }),
            ApiModule
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
