import { Body, Controller, Get, Post } from '@nestjs/common';
import { FormService } from './services/form.service';
import { createUserDto } from 'src/dto/createUser.dto';

@Controller()
export class FormController {
    
    constructor(
        private formServie: FormService
    ) {
    }

    @Post('form')
    async create(@Body() body: any) {
        return {
            title: body.title,
            name: body.name,
            email: body.email,
            phonenumber: body.phonenumber,
            isGraduate: body.isGraduate
        };
        //return this.formServie.create(body);
    }

    @Get('fill_data')
    getData() {
        return this.formServie.getData();
    }
}
