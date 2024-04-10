import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form } from '../form.entity';

@Injectable()
export class Form2Service {
    constructor(
        @InjectRepository(Form) private readonly formRepository: Repository<Form>
    ) {        
    }

    async create(form:Form): Promise<Form> {
        return await this.formRepository.save(form);
    }

    async getData(): Promise<Form[]> {
        return await this.formRepository.find();
    }
}
