import { Injectable, Inject, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { Form1Service } from './services/form1.service';
import { Form2Service } from './services/form2.service';

@Injectable({ scope: Scope.REQUEST })
export class FormFactory {
    constructor(
        @Inject(REQUEST) private request: Request,
        private form1Service: Form1Service,
        private form2Service: Form2Service
    ) {}

    create() {
        const formParam = this.request?.query?.source;
        switch (formParam) {
            case 'user':
                return this.form1Service;
            case 'employee':
                return this.form2Service;
            default:
                throw new Error(`Invalid form: ${formParam}`);
        }
    }
}