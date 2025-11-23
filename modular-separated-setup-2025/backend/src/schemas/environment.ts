import z from 'zod';
import { Environment } from '../types/global.js';

export const SEnvironment = z
  .object({
    ENV: z.enum(Environment),
    DATABASE_URL: z.string(),
  })
  .strip();
