import { Module } from '@nestjs/common';
import { userProviders } from './user.providers';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
    providers: [...userProviders, UserService],
    controllers: [UserController],
})
export class UserModule {}
