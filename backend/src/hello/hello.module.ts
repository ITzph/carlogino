import { Module } from '@nestjs/common';
import { HelloService } from './hello.service';
import { HelloController } from './hello.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HelloSchema } from './schema/hello.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Hello',
      schema: HelloSchema
    }])
  ],
  providers: [HelloService],
  controllers: [HelloController]
})
export class HelloModule {}
