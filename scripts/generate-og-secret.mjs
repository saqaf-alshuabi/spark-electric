import { randomBytes } from 'node:crypto';

const secret = randomBytes(32).toString('hex');

console.log('');
console.log('NUXT_OG_IMAGE_SECRET=' + secret);
console.log('');
console.log('Copy the line above into your .env file.');
