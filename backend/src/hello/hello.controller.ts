import { Controller, Get, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { HelloService } from './hello.service';
import { CreateHelloDTO } from './dto/create-hello.dto';

@Controller('hello')
export class HelloController {
    constructor(private helloService: HelloService) { }

    @Post('/add')
    async addHello(@Res() res, @Body() createHelloDTO: CreateHelloDTO) {
        const hello = await this.helloService.addGreeting(createHelloDTO);
        return res.status(HttpStatus.OK).json({
            message: "Greeting has been created successfully",
            hello
        })
    }

    @Get('get')
    async getGreeting(@Res() res) {
        const hello = await this.helloService.getGreeting();
        return res.status(HttpStatus.OK).json(hello);
    }
}
