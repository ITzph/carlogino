import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Hello } from './interface/hello.interface';
import { CreateHelloDTO } from './dto/create-hello.dto';

@Injectable()
export class HelloService {
    constructor(@InjectModel('Hello') private readonly helloModel: Model<Hello>) { }

    async getGreeting(): Promise<Hello> {
        const hello = await this.helloModel.find().exec();
        return hello;
    }

    async addGreeting(createHelloDTO : CreateHelloDTO): Promise<Hello> {
        const newHello = await this.helloModel(createHelloDTO);
        return newHello.save();
    }
}
