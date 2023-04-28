import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from 'src/enum/config';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  @Get()
  getUsers(): any {
    const db = this.configService.get(ConfigEnum.DB);
    const host = this.configService.get(ConfigEnum.DB_HOST);
    console.log(
      '🚀 ~ file: user.controller.ts:15 ~ UserController ~ getUsers ~ db:',
      db,
      host,
    );

    return this.userService.getUsers();
  }

  @Post()
  addUser(): any {
    return this.userService.addUser();
  }
}
