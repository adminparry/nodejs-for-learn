
import { UserEntity } from './user-entity';

export interface OtherInterface {
    findAll(): Promise<UserEntity[]>;
    findById(id: number): Promise<UserEntity>;
}
