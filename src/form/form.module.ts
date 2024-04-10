import { Module, Scope } from '@nestjs/common';
import { FormController } from './form.controller';
import { UUID } from 'crypto';
import { FormService } from './services/form.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from './form.entity';
import { FormFactory } from './form.factory';
import { Form1Service } from './services/form1.service';
import { Form2Service } from './services/form2.service';
import { FormToken } from './constants/form.constants';

@Module({
    imports:[TypeOrmModule.forFeature([Form])],
    controllers: [FormController],
    providers: [FormService,
        {
            provide: FormToken,
            scope: Scope.REQUEST,
            useFactory: (dataSourceFactory: FormFactory) => {
                return dataSourceFactory.create();
            },
            inject: [FormFactory],
        },
        FormFactory,
        Form1Service,
        Form2Service,
    ]
})
export class FormModule {
    'uniqueId' : UUID
    'title' : string
    'name' : string
    'email' : string
    'phonenumber' : number
    'isGraduate' : boolean
}
