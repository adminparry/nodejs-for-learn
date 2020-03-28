export interface Userservice {
    findAll(options: any): Promise<Array<User>>;

}
