import { Resolver, Query, Args } from '@nestjs/graphql';

import { OtherService } from './other.service';

@Resolver('Other')
export class OtherResolver {
    constructor(

        private readonly otherService: OtherService,
    ) { }

    @Query('user')
    user() {
        return 'hello world';
    }
    @Query('fuck')
    async a() {
        const ret = await this.otherService.findAll();
        return ret;
    }
    @Query('fuckById')
    async b(@Args() args: { id: number} ) {
        const { id } = args;
        const ret = await this.otherService.findById(id);
        return ret;
    }

}
