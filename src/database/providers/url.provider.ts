import { Url } from '../entities/url';

export const UrlProviders = [
  {
    provide: 'URL_REPOSITORY',
    useValue: Url,
  },
];