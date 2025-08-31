import { Redis } from '@upstash/redis'
export const redis = new Redis({
  url: 'https://enormous-wolf-49215.upstash.io',
  token:process.env.REDIS_TOKEN!
})

