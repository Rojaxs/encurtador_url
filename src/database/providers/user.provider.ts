import { User } from '../entities/users';

export const UserProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];