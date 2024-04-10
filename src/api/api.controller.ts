import { Controller, Get, Inject } from '@nestjs/common';
import { FormToken } from 'src/form/constants/form.constants';
import { Form } from 'src/form/interfaces/form.interface';

@Controller('api')
export class ApiController {
    constructor(@Inject(FormToken) private readonly form: Form) {}

    @Get('/data')
    fetchData() {
        return this.form.getData();
    }
}
