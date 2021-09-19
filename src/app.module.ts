import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [UsersModule,MongooseModule.forRoot(
    'mongodb+srv://ani:43614557@cluster0.n7zf2.mongodb.net/test')],
  controllers: [],
  providers: [],
})
export class AppModule {}
