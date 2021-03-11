import { config } from 'dotenv';
config();

export default {
    DB: process.env.MONGODB_URI,
    PORT: process.env.PORT
};