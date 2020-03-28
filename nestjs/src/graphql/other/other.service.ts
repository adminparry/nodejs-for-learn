import { Injectable, Inject } from '@nestjs/common';
import { OtherInterface } from './other-interface.interface';

import { UserEntity } from './user-entity';

@Injectable()
export class OtherService implements OtherInterface {
    constructor(
        @Inject('UserRepository') private readonly userRepository: typeof UserEntity,
        // @Inject('SequlizeToken') private readonly sequlizeToken
    ) { }
    public async findAll(): Promise<UserEntity[]> {

        return await this.userRepository.findAll<UserEntity>();
    }
    public async findById(id: number): Promise<UserEntity> {

        return await this.userRepository.findById<UserEntity>(id);
    }
    // public async create(user: UserEntity): Promise<UserEntity> {
    //     return await this.sequlizeToken.transaction(async transaction => {
    //         return this.userRepository.create<UserEntity>(user,{
    //             returning: true,
    //             transaction,
    //         });
    //     });
    // }
}
