import { GithubUser } from './githubUser.entity';

export const entityProviders = [
    {
        provide: 'GITHUB_USER_REPOSITORY',
        useValue: GithubUser,
    },
];
