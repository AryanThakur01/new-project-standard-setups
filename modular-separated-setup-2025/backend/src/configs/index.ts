import { SEnvironment } from '@/schemas/environment.js';

export const configs = {
  env: SEnvironment.parse(process.env),
};
