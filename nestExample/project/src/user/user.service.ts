import { Injectable, Inject } from '@nestjs/common';
import { User } from './entity/user';

@Injectable()
export class UserService {
    constructor(
        @Inject('UserRepository') private readonly userRepository: typeof User,
    ) { }
    // 查询所有
    async findAll(): Promise<User[]> {
        return await this.userRepository.findAll<User>();
    }
    // 按id查出单条
    async findById(id: number): Promise<User> {

        const ret = await this.userRepository.findById<User>(id);
        return ret;
    }
    // 新增
    async create(options: User): Promise<User> {
        const ret = await this.userRepository.create<User>(options);
        return ret;
    }
}
