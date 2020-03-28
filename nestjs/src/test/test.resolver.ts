import { Resolver, Query, Args, Mutation, Subscription } from '@nestjs/graphql';

import { PubSub } from 'graphql-subscriptions';
import { Inject } from '@nestjs/common';

export const PubSubFactory = {
    provide: 'PubSub',
    useFactory: () => {
        return new PubSub();
    },
};
@Resolver('Test')
export class TestResolver {
    constructor(

        @Inject('PubSub') private readonly pubSub: PubSub,
    ) { }
    @Query('books')
    async books(@Args() args: { name: string }) {
        return [{
            title: 'fackter',
            author: 'authors',
        }];
    }
    @Mutation('pubMessage')
    async sayHi(@Args() args: string) {
        this.pubSub.publish('subMessage', { subMessage: `msg: ${args}` });
        return `msg:${args}`;
    }

    @Subscription('subMessage')
    subMessage() {
        return {
            subscribe: () => this.pubSub.asyncIterator('subMessage'),
        };
    }
}
